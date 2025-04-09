import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from '../../schemas/formSchema';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    // Имитация API-запроса
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Отправленные данные:", data);
    alert("Форма успешно отправлена!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
      
      {/* Поле Email */}
      <div className="form-control mb-3">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          {...register("email")}
          type="email"
          className={`input input-bordered ml-7 ${errors.email ? "input-error" : ""}`}
          placeholder="user@example.com"
          id="email"
        />
        {errors.email && (
          <span className="text-error text-sm mt-1">{errors.email.message}</span>
        )}
      </div>

      {/* Поле Пароль */}
      <div className="form-control mb-3">
        <label className="label" htmlFor="password">
          <span className="label-text">Пароль</span>
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className={`input input-bordered ml-3 ${errors.password ? "input-error" : ""}`
        }
        />
        {errors.password && (
          <span className="text-error text-sm mt-1">{errors.password.message}</span>
        )}
      </div>

      {/* Чекбокс */}
      <div className="form-control mb-6">
        <label className="label cursor-pointer justify-start gap-2" htmlFor="agreeTerms">
          <input
            {...register("agreeTerms")}
            type="checkbox"
            id="agreeTerms"
            className="checkbox checkbox-primary"
          />
          <span className="label-text">Согласен с условиями</span>
        </label>
        {errors.agreeTerms && (
          <span className="text-error text-sm mt-1">{errors.agreeTerms.message}</span>
        )}
      </div>

      {/* Кнопка отправки */}
      <button
        type="submit"
        className={`btn btn-primary w-full ${isSubmitting ? "loading" : ""}`}
        disabled={isSubmitting || !isValid}
      >
        {isSubmitting ? "Отправка..." : "Зарегистрироваться"}
      </button>
    </form>
  );
}