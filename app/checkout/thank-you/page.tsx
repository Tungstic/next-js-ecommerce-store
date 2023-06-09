import UpdateTitle from './updateTitle';

export const metadata = {
  title: 'Thank you for your order',
};

export default function ThankYouPage() {
  return <UpdateTitle title={metadata.title} />;
}
