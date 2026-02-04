export default function Notes() {
  return (
    <div className="mt-12 bg-[#222] border border-[#E10600]/30 rounded-lg p-6 max-w-3xl mx-auto w-3/5">
      <div className="flex items-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clock w-6 h-6 text-[#E10600] shrink-0 mt-1"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <div>
          <h4 className="text-white text-lg mb-2">Important Notes</h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>• Guest invitations must be different people each time</li>
            <li>• Freeze periods can be activated when needed</li>
            <li>• Private sessions subject to coach availability</li>
            <li>• Membership upgrades allowed within 1 week of purchase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
