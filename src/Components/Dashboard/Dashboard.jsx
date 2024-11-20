import React, { useContext, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  BarChart as BarChartIcon,
  Activity,
  Users,
  ShoppingBag,
  MessageCircle,
  Calendar,
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
  Link,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authproviders";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Start with sidebar closed
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const updateinfo = () => {
    // Update user info
    //...
  };

  const learningTimeData = [
    { month: "Jan", hours: 42, users: 1200 },
    { month: "Feb", hours: 55, users: 1350 },
    { month: "Mar", hours: 63, users: 1500 },
    { month: "Apr", hours: 48, users: 1250 },
    { month: "May", hours: 72, users: 1675 },
    { month: "Jun", hours: 59, users: 1425 },
  ];

  const stats = [
    {
      title: "Total Users",
      value: "3,721",
      change: "+12%",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Sales",
      value: "$45,241",
      change: "+8%",
      icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
      title: "Active Users",
      value: "1,893",
      change: "+24%",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Messages",
      value: "342",
      change: "+4%",
      icon: <MessageCircle className="w-6 h-6" />,
    },
  ];

  const recentActivity = [
    {
      user: "John Doe",
      action: "made a purchase",
      time: "2 minutes ago",
      amount: "$123",
    },
    {
      user: "Sarah Smith",
      action: "signed up",
      time: "1 hour ago",
      amount: null,
    },
    {
      user: "Mike Johnson",
      action: "left a review",
      time: "3 hours ago",
      amount: null,
    },
    {
      user: "Emily Davis",
      action: "made a purchase",
      time: "5 hours ago",
      amount: "$89",
    },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const upcomingEvents = [
    { title: "Team Meeting", time: "10:00 AM", date: "Today" },
    { title: "Product Launch", time: "2:00 PM", date: "Tomorrow" },
    { title: "Client Presentation", time: "11:30 AM", date: "Wed, 20 Nov" },
  ];

  return (
    <div className="min-h-screen pt-10 bg-base-200">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      {/* Sidebar */}
      <div
        className={`fixed top-0 mt-20 left-0 h-screen bg-base-100 shadow-xl transition-all duration-300 ${
          isSidebarOpen ? "w-30" : "w-20"
        } sm:w-30`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1 className={`font-bold text-xl ${!isSidebarOpen && "hidden"}`}>
            Dashboard
          </h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-ghost btn-sm sm:hidden" // Only visible on small screens
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {[
              {
                icon: <BarChartIcon className="w-5 h-5" />,
                label: "Analytics",
              },
              { icon: <Users className="w-5 h-5" />, label: "Learning Time" },
              { icon: <ShoppingBag className="w-5 h-5" />, label: "Exam" },
              {
                icon: <MessageCircle className="w-5 h-5" />,
                label: "Messages",
              },
              { icon: <Calendar className="w-5 h-5" />, label: "Calendar" },
              { icon: <Settings className="w-5 h-5" />, label: "Settings" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center gap-4 text-base-content/70 hover:text-primary p-2 rounded-lg hover:bg-base-200 transition-colors"
                >
                  {item.icon}
                  <span className={!isSidebarOpen ? "hidden" : ""}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-0 right-0 p-4">
          <button
            onClick={handleLogout}
            className="btn btn-ghost w-full flex items-center gap-4 justify-center hover:bg-red-100 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className={!isSidebarOpen ? "hidden" : ""}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } sm:ml-64`} // Adjust layout for medium screens and larger
      >
        {/* Top Navigation */}
        <div>
          <div className="flex justify-between">
            <div className="flex-1">
              <div className="form-control">
                {" "}
                <div className="text-1xl font-bold">
                  Welcome{" "}
                  <span className="text-red-600 text-3xl italic">
                    {user?.displayName}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center align-center text-center gap-2">
              <div className="text-1xl font-bold">
                <span className="text-red-600  ">{user?.email}</span>
              </div>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10  border-4 rounded-full border-green-500">
                    <img className="p-1" src={user?.photoURL} alt="avatar" />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={updateinfo}
              className="btn bg-blue-600  text-white rounded-full mt-2"
            >
              Update Profile
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="card-title text-base-content/70">
                        {stat.title}
                      </h3>
                      <p className="text-2xl font-bold mt-2">{stat.value}</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-success text-sm font-medium">
                      {stat.change}
                    </span>
                    <span className="text-base-content/50 text-sm ml-2">
                      vs last month
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Card */}
            <div className="card bg-base-100 shadow-xl lg:col-span-2">
              <div className="card-body">
                <h3 className="card-title">Learning Time Overview</h3>
                <div className="w-full h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={learningTimeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="hours" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Recent Activity</h3>
                <ul className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <div className="font-medium">{activity.user}</div>
                        <div className="text-sm text-base-content/70">
                          {activity.action}
                        </div>
                      </div>
                      <div className="text-sm text-base-content/70">
                        {activity.time}
                      </div>
                      {activity.amount && (
                        <div className="text-sm text-base-content/70">
                          {activity.amount}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Upcoming Events</h3>
              <ul className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <li key={index} className="flex justify-between">
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-base-content/70">
                        {event.time}
                      </div>
                    </div>
                    <div className="text-sm text-base-content/70">
                      {event.date}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
