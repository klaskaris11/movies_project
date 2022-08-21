import {updateObject} from './Utils';

describe("Test util function updateObject", () => {
    test("To have the correct output v1", () => {
      const input = { num: 9238, data: "test" };
      const output = updateObject(input, {data: "test2"})
      expect(output).toEqual({ num: 9238, data: "test2" });
    });

    test("To have the correct output v2", () => {
        const input = { num: 9238, data: "test" };
        const output = updateObject(input, {num: 123})
        expect(output).toEqual({ num: 123, data: "test" });
      });

      test("To have the correct output v3", () => {
        const input = { num: 9238, data: "test" };
        const output = updateObject(input, {num: 123, data: "test2"})
        expect(output).toEqual({ num: 123, data: "test2" });
      });

      test("To have the correct output v4", () => {
        const input = { num: 9238, data: "test" };
        const output = updateObject(input, {data: null})
        expect(output).toEqual({ num: 9238, data: null });
      });

      test("To have the correct output v5", () => {
        const input = { num: 9238, data: "test" };
        const output = updateObject(input, {num: null})
        expect(output).toEqual({ num: null, data: "test" });
      });

      test("To have the correct output v6", () => {
        const input = { num: 9238, data: "test" };
        const output = updateObject(input, {num: null, data: null})
        expect(output).toEqual({ num: null, data: null });
      });

      test("To have the correct output v7", () => {
        const input = { num: 9238, data: "test" };
        const output = updateObject(input, {data: undefined})
        expect(output).toEqual({ num: 9238, data: undefined });
      });

      test("To have the correct output v8", () => {
        const input = { num: 9238, data: "test" };
        const output = updateObject(input, {num: undefined})
        expect(output).toEqual({ num: undefined, data: "test" });
      });

      test("To have the correct output v9", () => {
        const input = { num: 9238, data: "test" };
        const output = updateObject(input, {num: undefined, data: undefined})
        expect(output).toEqual({ num: undefined, data: undefined });
      });
  });