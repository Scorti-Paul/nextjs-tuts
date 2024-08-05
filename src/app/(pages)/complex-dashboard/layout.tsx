export default function DashboardLayout({ children,
  userAnalytics, revenueMetrics, notifications
}:
  {
    children: React.ReactNode,
    userAnalytics: React.ReactNode,
    revenueMetrics: React.ReactNode,
    notifications: React.ReactNode,
  }) {
  return (
    <>
      <div>{children}</div>
      <div className="flex">
        <div>
          <div>{userAnalytics}</div>
          <div>{revenueMetrics}</div>
        </div>
        <div>{notifications}</div>
      </div>
    </>
  )
}