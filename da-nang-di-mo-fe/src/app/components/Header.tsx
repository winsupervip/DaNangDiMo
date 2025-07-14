import { Button, Input, Layout, Menu, Select } from "antd";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../slices/languageSlice";

const {Header} = Layout;

export function HeaderBar() {
    const { t, i18n } = useTranslation();

const dispatch = useDispatch();
 const handleChangeLanguage = (lng: string) => {
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng);
  };

  const menuItems = [
    {
      key: "home",
      label: <Link href="/">{t("home")}</Link>,
    },
    {
      key: "about",
      label: <Link href="pages/about">{t("aboutUs")}</Link>,
    },
    {
      key: "login",
      label: <Link href="/auth/login">{t("login")}</Link>,
    },
    {
      key: "register",
      label: (
        <Link href="/auth/register">
          <Button type="primary">{t("register")}</Button>
        </Link>
      ),
    },
  ];

  // Sample options for districts and food types
  const districtOptions = [
    {value: "hai-chau", label: t("Hải Châu")},
    {value: "thanh-khe", label: "Thanh Khê"},
    {value: "son-tra", label: "Sơn Trà"},
    {value: "ngu-hanh-son", label: "Ngũ Hành Sơn"},
    {value: "lien-chieu", label: "Liên Chiểu"},
    {value: "cam-le", label: "Cẩm Lệ"},
    // ...add more if needed
  ];
  const foodTypeOptions = [
    {value: "bun", label: "Bún"},
    {value: "pho", label: "Phở"},
    {value: "com", label: "Cơm"},
    {value: "banh-mi", label: "Bánh mì"},
    {value: "lau", label: "Lẩu"},
    // ...add more if needed
  ];

  return (
    <Header
      style={{
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}
    >
      {/* Logo */}
      <div style={{display: "flex", alignItems: "center"}}>
        {/* <Image
          src="/logo.png"
          alt="Logo"
          height={40}
          width={40}
          style={{marginRight: 12, objectFit: "contain"}}
          priority
        /> */}
        <Link href="/" style={{textDecoration: "none"}}>
          <span
            style={{
              fontWeight: 700,
              fontSize: 20,
              color: "#333",
              cursor: "pointer",
            }}
          >
            Đà Nẵng Đi Mô
          </span>
        </Link>
      </div>

      {/* Search bar with selections */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flex: 1,
          justifyContent: "center",
          maxWidth: 600,
        }}
      >
        <Select
          placeholder={t("district")}
          options={districtOptions}
          style={{width: 140}}
        />
        <Select
          placeholder={t("foodType")}
          options={foodTypeOptions}
          style={{width: 140}}
        />
        <Input.Search
          placeholder={t("searchPlaceholder")}
          allowClear
          style={{
        width: 220,
        transition: "width 0.3s",
          }}
          onFocus={e => {
        e.target.style.width = "340px";
          }}
          onBlur={e => {
        e.target.style.width = "220px";
          }}
        />
      </div>
<Select
                defaultValue={i18n.language}
                style={{ width: 100, marginRight: 16 }}
                onChange={lng => handleChangeLanguage(lng)}
                options={[
                    { value: "vi", label: "Tiếng Việt" },
                    { value: "en", label: "English" },
                ]}
            />
      {/* Navigation */}
      <Menu
        mode="horizontal"
        selectable={false}
        items={menuItems}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          borderBottom: "none",
          background: "transparent",
          gap: 8,
          display: "flex",
        }}
      />
    </Header>
  );
}
