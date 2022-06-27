const { mockRequest, mockResponse } = require("jest-mock-req-res");
const createError = require("http-errors");

const baseService = require('./service')();
const baseController = require('./controller')(baseService);
const logger = require("../../logger");

jest.mock('./service');

describe("test base controller with album items", () => {
    const mockData = [{
        "id": '62b8ec3fff61c44736461210',
        "name": "Jégkrémbalett",
        "artist": 122,
        "songs": [],
        "year": 1984
    }, {
        "id": '62b8ec3fff61c44736461211',
        "name": "Kocsmaopera",
        "artist": 48,
        "year": 1991
    }, {
        "id": '62b8ec3fff61c44736461212',
        "name": "10000 lépés",
        "artist": 97,
        "year": 1969
    }
    ];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        baseService.__setMockData(mockData);
        response = mockResponse();
    });

    // test("findOne with invalid id should return undefined", () => {
    //     const albumId = 600;
    //     const request = mockRequest({
    //         params: {
    //             id: albumId
    //         }
    //     });
    //     console.log(baseController);
    //     return baseController.findOne(request, response, nextFunction)
    //         .then(() => {
    //             expect(baseService.findOne).toHaveBeenCalledWith(albumId)
    //             expect(nextFunction.toBeCalledWith(new createError.BadRequest(msgInvalidId)))
    //         })
    // });

    test("findOne with non-existing id should return {}", () => {
        const albumId = '62b8ec3fff61c4473646121f';
        const request = mockRequest({
            params: {
                id: albumId
            }
        });
        return baseController.findOne(request, response, nextFunction)
            .then(() => {
                expect(baseController.findOne).toBeCalledWith(albumId);
                expect(response.json).toBeCalledWith({})
            });
    });

    test("create a new album", () => {
        const newAlbum = {
            "id": '62b8ec3fff61c44736461213',
            "name": "Ringasd el magad",
            "artist": 51,
            "year": 1972
        }

        const request = mockRequest({
            body: newAlbum
        });

        return baseController.create(request, response, nextFunction)
            .then(() => {
                expect(baseService.create).toBeCalledWith(
                    newAlbum
                );
                expect(response.status).toBeCalledWith(201);
                expect(response.json).toBeCalledWith(
                    newAlbum)
            });
    });
})
