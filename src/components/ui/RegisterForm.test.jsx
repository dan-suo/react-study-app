import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  it('блокирует кнопку при пустых полях', () => {
    render(<RegisterForm />);
    const button = screen.getByRole('button', { name: /зарегистрироваться/i });
    expect(button).toBeDisabled();
  });

  it('показывает ошибку при некорректном email', async () => {
    render(<RegisterForm />);
    
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.blur(emailInput);

    expect(await screen.findByText(/Некорректный email/i)).toBeInTheDocument();
  });

  it('разблокирует кнопку при валидных данных', async () => {
    render(<RegisterForm />);
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Пароль');
    const checkbox = screen.getByLabelText('Согласен с условиями');
    const button = screen.getByRole('button', { name: /зарегистрироваться/i });

    // Вводим данные с задержкой между действиями
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.blur(emailInput);
    
    await waitFor(() => {
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.blur(passwordInput);
    });
    
    await waitFor(() => {
      fireEvent.click(checkbox);
    });

    // Ждем обновления состояния формы
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });
});