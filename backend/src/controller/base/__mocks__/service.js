
const mockService = ({
    mockData: [],
    __setMockData(data) {
        mockService.mockData = data;
    },
    findAll: jest.fn(async function () {
        return mockService.mockData;
    }),
    findOne: jest.fn(async function (_id) {
        return mockService.mockData.find(item => item._id === _id);
    }),
    create: jest.fn(async function (data) {
        mockService.mockData.push(data);
        return data;
    })
});

module.exports = () => mockService;
