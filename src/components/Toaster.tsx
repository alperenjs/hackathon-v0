import * as ToastPrimitive from '@radix-ui/react-toast';
import { Toast, ToastDescription, ToastTitle } from '@/common/ui/toast';
import { useToast } from '@/hooks/useToast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastPrimitive.Provider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <Toast 
            key={id} 
            {...props}
            className={variant === 'error' ? 'border-red-200 bg-red-50' : variant === 'success' ? 'border-green-200 bg-green-50' : ''}
          >
            <div className="grid gap-1">
              {title && <ToastTitle className={variant === 'error' ? 'text-red-900' : variant === 'success' ? 'text-green-900' : ''}>{title}</ToastTitle>}
              {description && (
                <ToastDescription className={variant === 'error' ? 'text-red-800' : variant === 'success' ? 'text-green-800' : ''}>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastPrimitive.Close />
          </Toast>
        );
      })}
      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px]" />
    </ToastPrimitive.Provider>
  );
}

