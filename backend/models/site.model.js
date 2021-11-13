var db = require("../utils/db");

exports.all = () => {
  return db.load("select * from SanPham");
};

exports.statistics = () => {
  return db.load(`
  ;WITH months(MonthNumber,nam,doanhthu) AS
  (
      select distinct 1,year(HD.NgayLap),0
    from HoaDon HD
      UNION ALL
      SELECT MonthNumber+1,nam,0
      FROM months
      where MonthNumber < 12
  ),
    temp(Month,YEAR,DOANHTHU) as
  (
    SELECT Month(HD.NgayLap) as month,YEAR(HD.NgayLap) as year,sum(HD.TongTien) as DoanhThu
    FROM HoaDon HD
    GROUP BY Month(HD.NgayLap),YEAR(HD.NgayLap)
    --ORDER BY YEAR(HD.NgayLap) DESC,Month(HD.NgayLap) DESC
  )
  select M.MonthNumber as Month,M.nam as Year, ISNULL(T.DOANHTHU,0) as DoanhThu
  from months M
  left join temp T
  on M.nam=T.YEAR and M.MonthNumber=T.Month
  order by M.nam ASC, M.MonthNumber ASC`);
};
exports.add = (invoice) => {
  return db.add(invoice);
};
