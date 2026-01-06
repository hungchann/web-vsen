import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslate } from '@/helpers';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  productId?: string;
  productName?: string;
}

export default function QuoteModal({ isOpen, closeModal, productId, productName }: Props) {
  const { __ } = useTranslate();
  const { flash } = usePage().props as any;
  const [showSuccess, setShowSuccess] = useState(false);
  const { data, setData, post, processing, reset, errors } = useForm({
    product_id: productId || '',
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: 1,
    message: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/quote-request', {
      onSuccess: () => {
        reset();
        setShowSuccess(true);
        // Auto close modal after 2 seconds
        setTimeout(() => {
          closeModal();
          setShowSuccess(false);
        }, 2000);
      },
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900 mb-4"
                >
                  {__('Request Quote')}
                  {productName && <span className="block text-sm text-ge-blue font-normal mt-1">{__('for')} {productName}</span>}
                </Dialog.Title>

                {/* Success Message */}
                {showSuccess && (
                  <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-800 text-sm font-medium">{flash?.success || __('Your quote request has been sent successfully! We will contact you shortly.')}</p>
                  </div>
                )}
                
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{__('Full Name')} *</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring-ge-blue sm:text-sm"
                      value={data.name}
                      onChange={e => setData('name', e.target.value)}
                      required
                    />
                    {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">{__('Email Address')} *</label>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring-ge-blue sm:text-sm"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        required
                      />
                      {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">{__('Phone')} *</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring-ge-blue sm:text-sm"
                        value={data.phone}
                        onChange={e => setData('phone', e.target.value)}
                        required
                      />
                      {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">{__('Company')}</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring-ge-blue sm:text-sm"
                      value={data.company}
                      onChange={e => setData('company', e.target.value)}
                    />
                  </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <label className="block text-sm font-medium text-gray-700">{__('Quantity')}</label>
                         <input
                            type="number"
                            min="1"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring-ge-blue sm:text-sm"
                            value={data.quantity}
                            onChange={e => setData('quantity', parseInt(e.target.value))}
                         />
                      </div>
                   </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">{__('Message')}</label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring-ge-blue sm:text-sm"
                      rows={3}
                      value={data.message}
                      onChange={e => setData('message', e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      {__('Cancel')}
                    </button>
                    <button
                      type="submit"
                      disabled={processing}
                      className="inline-flex justify-center rounded-md border border-transparent bg-ge-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      {processing ? __('Processing...') : __('Send Request')}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
