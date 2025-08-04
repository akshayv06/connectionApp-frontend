import React from 'react';
import {
  HomeIcon,
  UsersIcon,
  SendIcon,
  CheckCircle2Icon,
  XCircleIcon,
} from 'lucide-react'; // Install lucide-react for icons

const Nav = () => {
  return (
    <aside className="bg-gradient-to-b from-indigo-100 to-indigo-200 h-screen shadow-xl p-6 flex flex-col gap-6 w-64 border-r border-indigo-300">
      <div>
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-4 tracking-wide drop-shadow-sm">ConnectHub</h2>
        <hr className="border-indigo-300" />
      </div>

      <nav className="flex flex-col gap-3 text-gray-700 text-sm font-medium">
        <NavItem icon={<HomeIcon size={20} />} label="Dashboard" />
        <NavItem icon={<UsersIcon size={20} />} label="Register Users" />
        <NavItem icon={<SendIcon size={20} />} label="Send Connection Request" />
        <NavItem icon={<CheckCircle2Icon size={20} />} label="Accept Request" />
        <NavItem icon={<XCircleIcon size={20} />} label="Reject Request" />
      </nav>
    </aside>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-300/20 hover:text-indigo-800 cursor-pointer transition-all duration-200 ease-in-out">
    <div className="text-indigo-600">{icon}</div>
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

export default Nav;
