import { Controller, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { IOption, IUserData } from "./types";
import { requiredMessage, options, REGEX_EXCLUDE_SYMBOLS } from "./constants";
import "./UserForms.scss";

// TODO: Move to helper file
const getValue = (value?: string) =>
  value ? options.find((options) => options.value === value) : "";

export const UserForm: React.FC<IUserData> = (user:IUserData) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IUserData>({
    mode: "onBlur",
  });

  const { first_name, second_name, age, email, id, handler } = user;

  return (
    <div className="userForm">
      <div className="userForm__container">
        <form
          onSubmit={handleSubmit((data) => {
            handler(data, id as number);
          })}
        >
          <input
            className="userForm__input"
            aria-label={requiredMessage.first_name}
            {...register("first_name", {
              required: requiredMessage.first_name,
            })}
            placeholder="name"
            defaultValue={first_name || ""}
          />
          {errors.first_name && (
            <div className="userForm__alertErrors">
              {" "}
              {errors.first_name.message}{" "}
            </div>
          )}
          <input
            className="userForm__input"
            aria-label={requiredMessage.second_name}
            {...register("second_name", {
              required: requiredMessage.second_name,
            })}
            placeholder="surname"
            defaultValue={second_name || ""}
          />
          {errors.second_name && (
            <div className="userForm__alertErrors">
              {" "}
              {errors.second_name.message}{" "}
            </div>
          )}

          <input
            className="userForm__input"
            aria-label={requiredMessage.age}
            {...register("age", { required: requiredMessage.age })}
            placeholder="age"
            type="number"
            defaultValue={age || ""}
          />
          {errors.age && (
            <div className="userForm__alertErrors"> {errors.age.message} </div>
          )}

          <input
            className="userForm__input"
            aria-label={requiredMessage.emailRequred}
            {...register("email", {
              required: requiredMessage.emailRequred,
              pattern: {
                value: REGEX_EXCLUDE_SYMBOLS,
                message: requiredMessage.emailMessage,
              },
            })}
            placeholder="email"
            defaultValue={email || ""}
          />
          {errors.email && (
            <div className="userForm__alertErrors">
              {" "}
              {errors.email.message}{" "}
            </div>
          )}

          <Controller
            control={control}
            name="position"
            rules={{
              required: requiredMessage.position,
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div className="userForm__select">
                <ReactSelect
                  aria-label={requiredMessage.position}
                  placeholder="Position"
                  options={options}
                  value={getValue(value)}
                  onChange={(newValue) => onChange((newValue as IOption).value)}
                />
                {errors.email && (
                  <div className="userForm__alertErrors">
                    {" "}
                    {error?.message}{" "}
                  </div>
                )}
              </div>
            )}
          />
          <div>
            <button
              aria-label={requiredMessage.button}
              className="userForm__btmSubmit"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
