import React, { useContext, useState } from "react";
import {
  BarChart,
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
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authproviders";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(navigate);

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
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error);
      // Optionally show error using a toast/alert
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
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1 className={`font-bold text-xl ${!isSidebarOpen && "hidden"}`}>
            Dashboard
          </h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-ghost btn-sm"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { icon: <BarChart className="w-5 h-5" />, label: "Analytics" },
              { icon: <Users className="w-5 h-5" />, label: "Customers" },
              { icon: <ShoppingBag className="w-5 h-5" />, label: "Orders" },
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
        }`}
      >
        {/* Top Navigation */}
        <div className="navbar bg-base-100 shadow">
          <div className="flex-1">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-none gap-2">
            <div className="text-1xl font-bold">
              Welcome{" "}
              <span className="text-red-600 text-3xl italic">
                {user?.displayName}
              </span>
            </div>
            {/* <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Bell className="w-5 h-5" />
                <span className="badge badge-xs badge-primary indicator-item">
                  6
                </span>
              </div>
            </button> */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="avatar" />
                </div>
              </label>
            </div>
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
                <h3 className="card-title">Revenue Overview</h3>
                <div className="h-80 flex items-center justify-center bg-base-200/50 rounded-lg">
                  {/* Placeholder for chart */}
                  <p className="text-base-content/50">Chart would go here</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Recent Activity</h3>
                <div className="space-y-4 mt-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img
                            src={`/api/placeholder/${40 + index}/${40 + index}`}
                            alt="user"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">
                          {activity.user} {activity.action}
                        </p>
                        <p className="text-sm text-base-content/50">
                          {activity.time}
                        </p>
                        {activity.amount && (
                          <span className="text-success font-medium">
                            {activity.amount}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Events */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Upcoming Events</h3>
                <div className="space-y-4 mt-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-base-content/50">
                          {event.time} - {event.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    "Add Product",
                    "New Message",
                    "Schedule Event",
                    "View Reports",
                  ].map((action, index) => (
                    <button key={index} className="btn btn-outline">
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
