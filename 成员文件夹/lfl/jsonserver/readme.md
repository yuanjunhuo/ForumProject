http://localhost:3000/users

http://localhost:3000/users/3




http://localhost:3000/companies

http://localhost:3000/companies/1

//获取users里面companyid=2的。
http://localhost:3000/companies/2/users

根据公司名字获取信息
http://localhost:3000/companies?name=apple

一页中只有两条数据,获取第2页
http://localhost:3000/companies?_page=2&_limit=2


按照name升序排序 asc升序，desc降序；
http://localhost:3000/companies?_sort=name&_order=asc

获取年龄为22及以上的
http://localhost:3000/users?age_gte=22

获取年龄为23及以下的
http://localhost:3000/users?age_lte=23

获取年龄22-23之间
http://localhost:3000/users?age_gte=22&age_lte=23


搜索用户信息含有h的用户
http://localhost:3000/users?q=h