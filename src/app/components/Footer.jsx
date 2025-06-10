export default function Footer() {
  return (
    <footer className="bg-white text-blue-900 p-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p>Email: info@statshare.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>

        <div>
          <h4 className="font-semibold">Careers</h4>
          <p>
            <a href="#" className="hover:underline">
              Open Positions
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Legal</h4>
          <p>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
      <p className="text-center mt-4 text-sm">
        &copy; {new Date().getFullYear()} StatShare. All rights reserved.
      </p>
    </footer>
  );
}
