import { ChangeEvent, useState } from "react";
import { IRegisterRage } from "../types";

const RegisterPage = () => {
    const init: IRegisterRage = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        file:"",
    };

    const [data, setData] = useState<IRegisterRage>(init);

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        console.log("Ми відправляємо на сервер", data);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };


    return (
        <>
            <h1 className="text-center">Реєстрація на сайті</h1>
            <form onSubmit={onSubmitHandler} className="col-md-6 offset-md-3">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        Ім'я
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={data.firstName}
                        onChange={onChangeHandler}
                        aria-describedby="firstNameHelp"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Прізвище
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={data.lastName}
                        onChange={onChangeHandler}
                        aria-describedby="lastNameHelp"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Електронна адраса
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={onChangeHandler}
                        aria-describedby="emailHelp"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Пароль
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Підтвердження Паролю
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={onChangeHandler}
                        value={data.confirmPassword}
                    />
                </div>

                <img src="{data.file}" className="img-thumbnail" alt="avatar"></img>

                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                        Заватнижити Аватар
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="formFile"
                        name="file"
                        onChange={onChangeHandler}
                        value={data.file}
                    />
                </div>


                <button type="submit" className="btn btn-primary">
                    Зареєструватися
                </button>
            </form>
        </>
    );
};

export default RegisterPage;
