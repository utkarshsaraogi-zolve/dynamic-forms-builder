/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { StudentLoan } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StudentLoanUpdateForm(props) {
  const {
    id: idProp,
    studentLoan: studentLoanModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    phoneNo: "",
    collateral: false,
    appliedForLoan: false,
    loanAmount: "",
    currency: "",
    collegeName: "",
    GREScore: "",
    GMATScore: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [phoneNo, setPhoneNo] = React.useState(initialValues.phoneNo);
  const [collateral, setCollateral] = React.useState(initialValues.collateral);
  const [appliedForLoan, setAppliedForLoan] = React.useState(
    initialValues.appliedForLoan
  );
  const [loanAmount, setLoanAmount] = React.useState(initialValues.loanAmount);
  const [currency, setCurrency] = React.useState(initialValues.currency);
  const [collegeName, setCollegeName] = React.useState(
    initialValues.collegeName
  );
  const [GREScore, setGREScore] = React.useState(initialValues.GREScore);
  const [GMATScore, setGMATScore] = React.useState(initialValues.GMATScore);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = studentLoanRecord
      ? { ...initialValues, ...studentLoanRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setPhoneNo(cleanValues.phoneNo);
    setCollateral(cleanValues.collateral);
    setAppliedForLoan(cleanValues.appliedForLoan);
    setLoanAmount(cleanValues.loanAmount);
    setCurrency(cleanValues.currency);
    setCollegeName(cleanValues.collegeName);
    setGREScore(cleanValues.GREScore);
    setGMATScore(cleanValues.GMATScore);
    setErrors({});
  };
  const [studentLoanRecord, setStudentLoanRecord] =
    React.useState(studentLoanModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(StudentLoan, idProp)
        : studentLoanModelProp;
      setStudentLoanRecord(record);
    };
    queryData();
  }, [idProp, studentLoanModelProp]);
  React.useEffect(resetStateValues, [studentLoanRecord]);
  const validations = {
    email: [{ type: "Required" }],
    phoneNo: [{ type: "Required" }],
    collateral: [],
    appliedForLoan: [],
    loanAmount: [],
    currency: [],
    collegeName: [],
    GREScore: [],
    GMATScore: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email,
          phoneNo,
          collateral,
          appliedForLoan,
          loanAmount,
          currency,
          collegeName,
          GREScore,
          GMATScore,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            StudentLoan.copyOf(studentLoanRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StudentLoanUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              phoneNo,
              collateral,
              appliedForLoan,
              loanAmount,
              currency,
              collegeName,
              GREScore,
              GMATScore,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone no"
        isRequired={true}
        isReadOnly={false}
        value={phoneNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phoneNo: value,
              collateral,
              appliedForLoan,
              loanAmount,
              currency,
              collegeName,
              GREScore,
              GMATScore,
            };
            const result = onChange(modelFields);
            value = result?.phoneNo ?? value;
          }
          if (errors.phoneNo?.hasError) {
            runValidationTasks("phoneNo", value);
          }
          setPhoneNo(value);
        }}
        onBlur={() => runValidationTasks("phoneNo", phoneNo)}
        errorMessage={errors.phoneNo?.errorMessage}
        hasError={errors.phoneNo?.hasError}
        {...getOverrideProps(overrides, "phoneNo")}
      ></TextField>
      <SwitchField
        label="Collateral"
        defaultChecked={false}
        isDisabled={false}
        isChecked={collateral}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              email,
              phoneNo,
              collateral: value,
              appliedForLoan,
              loanAmount,
              currency,
              collegeName,
              GREScore,
              GMATScore,
            };
            const result = onChange(modelFields);
            value = result?.collateral ?? value;
          }
          if (errors.collateral?.hasError) {
            runValidationTasks("collateral", value);
          }
          setCollateral(value);
        }}
        onBlur={() => runValidationTasks("collateral", collateral)}
        errorMessage={errors.collateral?.errorMessage}
        hasError={errors.collateral?.hasError}
        {...getOverrideProps(overrides, "collateral")}
      ></SwitchField>
      <SwitchField
        label="Applied for loan"
        defaultChecked={false}
        isDisabled={false}
        isChecked={appliedForLoan}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              email,
              phoneNo,
              collateral,
              appliedForLoan: value,
              loanAmount,
              currency,
              collegeName,
              GREScore,
              GMATScore,
            };
            const result = onChange(modelFields);
            value = result?.appliedForLoan ?? value;
          }
          if (errors.appliedForLoan?.hasError) {
            runValidationTasks("appliedForLoan", value);
          }
          setAppliedForLoan(value);
        }}
        onBlur={() => runValidationTasks("appliedForLoan", appliedForLoan)}
        errorMessage={errors.appliedForLoan?.errorMessage}
        hasError={errors.appliedForLoan?.hasError}
        {...getOverrideProps(overrides, "appliedForLoan")}
      ></SwitchField>
      <TextField
        label="Loan amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={loanAmount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              phoneNo,
              collateral,
              appliedForLoan,
              loanAmount: value,
              currency,
              collegeName,
              GREScore,
              GMATScore,
            };
            const result = onChange(modelFields);
            value = result?.loanAmount ?? value;
          }
          if (errors.loanAmount?.hasError) {
            runValidationTasks("loanAmount", value);
          }
          setLoanAmount(value);
        }}
        onBlur={() => runValidationTasks("loanAmount", loanAmount)}
        errorMessage={errors.loanAmount?.errorMessage}
        hasError={errors.loanAmount?.hasError}
        {...getOverrideProps(overrides, "loanAmount")}
      ></TextField>
      <TextField
        label="Currency"
        isRequired={false}
        isReadOnly={false}
        value={currency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phoneNo,
              collateral,
              appliedForLoan,
              loanAmount,
              currency: value,
              collegeName,
              GREScore,
              GMATScore,
            };
            const result = onChange(modelFields);
            value = result?.currency ?? value;
          }
          if (errors.currency?.hasError) {
            runValidationTasks("currency", value);
          }
          setCurrency(value);
        }}
        onBlur={() => runValidationTasks("currency", currency)}
        errorMessage={errors.currency?.errorMessage}
        hasError={errors.currency?.hasError}
        {...getOverrideProps(overrides, "currency")}
      ></TextField>
      <TextField
        label="College name"
        isRequired={false}
        isReadOnly={false}
        value={collegeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              phoneNo,
              collateral,
              appliedForLoan,
              loanAmount,
              currency,
              collegeName: value,
              GREScore,
              GMATScore,
            };
            const result = onChange(modelFields);
            value = result?.collegeName ?? value;
          }
          if (errors.collegeName?.hasError) {
            runValidationTasks("collegeName", value);
          }
          setCollegeName(value);
        }}
        onBlur={() => runValidationTasks("collegeName", collegeName)}
        errorMessage={errors.collegeName?.errorMessage}
        hasError={errors.collegeName?.hasError}
        {...getOverrideProps(overrides, "collegeName")}
      ></TextField>
      <TextField
        label="Gre score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={GREScore}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              phoneNo,
              collateral,
              appliedForLoan,
              loanAmount,
              currency,
              collegeName,
              GREScore: value,
              GMATScore,
            };
            const result = onChange(modelFields);
            value = result?.GREScore ?? value;
          }
          if (errors.GREScore?.hasError) {
            runValidationTasks("GREScore", value);
          }
          setGREScore(value);
        }}
        onBlur={() => runValidationTasks("GREScore", GREScore)}
        errorMessage={errors.GREScore?.errorMessage}
        hasError={errors.GREScore?.hasError}
        {...getOverrideProps(overrides, "GREScore")}
      ></TextField>
      <TextField
        label="Gmat score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={GMATScore}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              phoneNo,
              collateral,
              appliedForLoan,
              loanAmount,
              currency,
              collegeName,
              GREScore,
              GMATScore: value,
            };
            const result = onChange(modelFields);
            value = result?.GMATScore ?? value;
          }
          if (errors.GMATScore?.hasError) {
            runValidationTasks("GMATScore", value);
          }
          setGMATScore(value);
        }}
        onBlur={() => runValidationTasks("GMATScore", GMATScore)}
        errorMessage={errors.GMATScore?.errorMessage}
        hasError={errors.GMATScore?.hasError}
        {...getOverrideProps(overrides, "GMATScore")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || studentLoanModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || studentLoanModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
