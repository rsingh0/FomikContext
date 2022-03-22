import React from "react";
import renderer from "react-test-renderer";
import * as Formik from "formik";
import { AutoSubmitToken } from "../formik-context";

describe("Formik Context: Snapshot", () => {
  const useFormikContextMock = jest.spyOn(Formik, "useFormikContext");
  
  beforeEach(async () => {
    useFormikContextMock.mockReturnValue({
      isSubmitting: false,
      resetForm: (nextState) => {
        return null;
      },
      values: { token: "testValue" },
      submitForm: () => new Promise(() => null),
      setFieldValue: (field, value, shouldValidate) => {
        return null;
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("matches snapshot with reset values", () => {
    const tree = renderer.create(<AutoSubmitToken />);
    expect(tree).toMatchSnapshot();
  });
});
