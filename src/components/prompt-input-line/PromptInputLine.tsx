import { useForm, Controller } from "react-hook-form";
import "./PromptInputLine.css";
import ConfirmBtn from "../confirm-btn/ConfirmBtn";

const PromptInputLine = (props: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
  } = useForm();

  const onSubmit = (data: any) => {
    props.generateNewImage(data.prompt);
    clearErrors("prompt");
    setValue("prompt", "");
  };

  const onClickHandler = !props.isImgGenerating
    ? handleSubmit(onSubmit)
    : undefined;

  return (
    <div className="prompt-input-line">
      <Controller
        control={control}
        name="prompt"
        rules={{ required: true, maxLength: 300 }}
        render={({ field }) => (
          <input
            autoComplete="off"
            className="prompt-input"
            {...field}
            placeholder="Insert your prompt here"
          />
        )}
      />
      <ConfirmBtn onClick={onClickHandler}></ConfirmBtn>
      {props.errorMessage ? (
        <p className="generation-error-message">{props.errorMessage}</p>
      ) : (
        ""
      )}
      {errors.prompt ? (
        <p className="generation-error-message">
          Prompt must be provided and be less than 300 characters long.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default PromptInputLine;
