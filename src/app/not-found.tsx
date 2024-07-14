import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-4">
      <h3 className="text-3xl mb-4 font-bold">Not found</h3>
      <p className="text-lg">The page you&apos;re looking for was not found.</p>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex justify-center">
        <Link
          href="/"
          className="mx-auto bg-gray-600 text-white py-2 px-3 rounded-xl"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
