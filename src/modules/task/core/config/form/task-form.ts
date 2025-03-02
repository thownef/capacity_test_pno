import * as Yup from "yup";

import { type ClientForm } from "@/modules/client/core/types/client.type";
import { ConfigFieldRender } from "@/shared/core/types/form.type";
import { displayTypeOptions } from "@/modules/client/core/config/select-options";

export const initForm: ClientForm = {
  customer: "",
  clientName: "",
  clientNameKana: "",
  loginId: "",
  password: "",
  emails: [{ address: "", isDaily: true, isApt: true }],
  personInCharge: [{ name: "" }],
  contactName: "",
  isDisplay: "1",
  postCode: "",
  prefectures: "",
  address: "",
  phoneNumber: "",
  isAptConfirm: 0,
  businessManagementFee: 0,
  billDateline: 0,
  billPaymentDueDate: 0,
  emailSubject: "",
  emailContent: "",
  dailySenderName: "",
  dailyEmailAddress: "",
  aptSenderName: "",
  aptEmailAddress: "",
};

export const ClientAddSchema = Yup.object().shape({
  customer: Yup.string(),
  clientName: Yup.string().required("クライアント名が入力されていません。"),
  clientNameKana: Yup.string(),
  emailAddres: Yup.string().email("無効なメールアドレス形式です。"),
  loginId: Yup.string().required("ログインIDが入力されていません。"),
  password: Yup.string().required("ログインパスワードが入力されていません。"),
  emails: Yup.array().of(
    Yup.object().shape({
      address: Yup.string(),
      isDaily: Yup.boolean(),
      isApt: Yup.boolean(),
    }),
  ),
  personInCharge: Yup.array().of(
    Yup.object().shape({
      name: Yup.string(),
    }),
  ),
  contactName: Yup.string(),
  isDisplay: Yup.string(),
  postCode: Yup.string(),
  prefectures: Yup.string(),
  address: Yup.string(),
  phoneNumber: Yup.string(),
  isAptConfirm: Yup.boolean(),
  businessManagementFee: Yup.string()
  .matches(/^\d{0,12}$/, "業務管理費は整数12桁以内で入力してください"),
  billDateline: Yup.string()
  .matches(/^([0-2]?[0-9]|3[0-1])$|^$/, "請求締め日は0～31で入力してください"),
  billPaymentDueDate: Yup.string()
  .matches(/^([0-2]?[0-9]|3[0-1])$|^$/, "請求支払い期日は0～31で入力してください"),
  emailSubject: Yup.string(),
  emailContent: Yup.string(),
  dailySenderName: Yup.string(),
  dailyEmailAddress: Yup.string().email("無効なメールアドレス形式です。"),
  aptSenderName: Yup.string(),
  aptEmailAddress: Yup.string().email("無効なメールアドレス形式です。"),
});

export type FormClient = Yup.InferType<typeof ClientAddSchema>;

export const topFieldConfig: ConfigFieldRender[] = [
  {
    type: "input",
    label: "顧客リストから読込",
    name: "customer",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "input",
    label: "クライアント名",
    name: "clientName",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
    isRequired: true,
  },
  {
    type: "input",
    label: "クライアント名カナ",
    name: "clientNameKana",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "input",
    label: "ログインID",
    name: "loginId",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
    isRequired: true,
  },
  {
    type: "input",
    label: "ログインパスワード",
    name: "password",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
    isRequired: true,
  },
];

export const bottomFieldConfig: ConfigFieldRender[] = [
  {
    type: "input",
    label: "担当者名",
    name: "contactName",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "select",
    label: "表示/非表示",
    name: "isDisplay",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
    options: displayTypeOptions,
    disableAllowEmpty: true,
  },
  {
    type: "input",
    label: "郵便番号",
    name: "postCode",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "select",
    label: "都道府県",
    name: "prefectures",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "input",
    label: "住所",
    name: "address",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "input",
    label: "電話番号",
    name: "phoneNumber",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "checkbox",
    label: "アポイント事前確認",
    name: "isAptConfirm",
    content: "不要",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "input",
    label: "業務管理費",
    name: "businessManagementFee",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "input",
    label: "請求締め日",
    name: "billDateline",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
  {
    type: "input",
    label: "請求支払い期日",
    name: "billPaymentDueDate",
    className: "mb-4",
    classNames: {
      mainWrapper: "w-full",
      label: "w-[200px] flex justify-end text-small",
    },
    labelPlacement: "outside-left",
  },
];
