import {TestAsyncThunk} from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {Currency} from "@/entities/Currency";
import {Countries} from "@/entities/Country";
import {fetchProfileData} from "../FetchProfileData";

jest.mock("axios");

const testData = {
    id: "1",
    firstname: "Ilya",
    lastname: "Patrushev",
    age: "24",
    currency: Currency.USD,
    country: Countries.USA,
    city: "Almaty",
    username: "ilyapat99"
};

describe("FetchProfileData test", () => {
    test("success get data test", async () => {
        const thunk = TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: testData}));

        const result = await thunk.callThunk("1");

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toBe(testData);
    });

    test("rejected with error NO_DATA", async () => {
        const thunk = TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk("2");

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toHaveProperty("data", ["NO_DATA"]);
    });
});
