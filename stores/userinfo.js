import {
	defineStore
} from "pinia";
import {getNowDate} from '../utils/now-date.js'
import { date } from "../uni_modules/uview-plus/libs/function/test.js";
export const userInfoStore = defineStore('userInfo', {
	state: () => {
		return {
			datalist: [
				{
					"date": "2023-03-15",
					"weekday": "周三",
					"records": [{
							"time": "08:15:00",
							"type": "income",
							"category": "工资",
							"amount": 23580.00,
							"payment": "银行转账",
							"note": "三月工资到账",
							"status": "completed"
						},
						{
							"time": "12:30:00",
							"type": "expense",
							"category": "餐饮",
							"amount": 38.50,
							"payment": "支付宝-余额",
							"note": "午餐-麦当劳套餐",
							"status": "completed"
						},
						{
							"time": "19:45:00",
							"type": "expense",
							"category": "服装",
							"amount": 299.00,
							"payment": "微信支付-零钱",
							"note": "优衣库春季衬衫",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-16",
					"weekday": "周四",
					"records": [{
							"time": "09:00:00",
							"type": "expense",
							"category": "餐饮",
							"amount": 8.50,
							"payment": "校园卡",
							"note": "食堂早餐",
							"status": "pending"
						},
						{
							"time": "17:20:00",
							"type": "income",
							"category": "兼职",
							"amount": 1500.00,
							"payment": "现金",
							"note": "家教课时费",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-17",
					"weekday": "周五",
					"records": [{
							"time": "10:00:00",
							"type": "expense",
							"category": "交通",
							"amount": 150.00,
							"payment": "滴滴出行-企业账户",
							"note": "机场快车",
							"status": "refunded"
						},
						{
							"time": "22:15:00",
							"type": "expense",
							"category": "娱乐",
							"amount": 89.00,
							"payment": "美团-信用支付",
							"note": "深夜电影院",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-18",
					"weekday": "周六",
					"records": [{
							"time": "11:20:00",
							"type": "expense",
							"category": "购物",
							"amount": 450.00,
							"payment": "支付宝-花呗",
							"note": "超市购物",
							"status": "completed"
						},
						{
							"time": "15:45:00",
							"type": "income",
							"category": "奖金",
							"amount": 5000.00,
							"payment": "银行转账",
							"note": "季度奖金",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-19",
					"weekday": "周日",
					"records": [{
							"time": "09:30:00",
							"type": "expense",
							"category": "餐饮",
							"amount": 25.00,
							"payment": "微信支付-零钱",
							"note": "早餐-豆浆油条",
							"status": "completed"
						},
						{
							"time": "18:00:00",
							"type": "expense",
							"category": "娱乐",
							"amount": 120.00,
							"payment": "支付宝-余额",
							"note": "KTV聚会",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-20",
					"weekday": "周一",
					"records": [{
							"time": "08:00:00",
							"type": "expense",
							"category": "交通",
							"amount": 6.00,
							"payment": "公交卡",
							"note": "公交上班",
							"status": "completed"
						},
						{
							"time": "12:00:00",
							"type": "expense",
							"category": "餐饮",
							"amount": 20.00,
							"payment": "微信支付-零钱",
							"note": "午餐-快餐",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-21",
					"weekday": "周二",
					"records": [{
							"time": "10:30:00",
							"type": "expense",
							"category": "医疗",
							"amount": 200.00,
							"payment": "支付宝-余额",
							"note": "药店购药",
							"status": "completed"
						},
						{
							"time": "19:00:00",
							"type": "expense",
							"category": "教育",
							"amount": 300.00,
							"payment": "微信支付-零钱",
							"note": "购买在线课程",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-22",
					"weekday": "周三",
					"records": [{
							"time": "07:50:00",
							"type": "expense",
							"category": "交通",
							"amount": 10.00,
							"payment": "滴滴出行-个人账户",
							"note": "打车上班",
							"status": "completed"
						},
						{
							"time": "13:00:00",
							"type": "expense",
							"category": "餐饮",
							"amount": 35.00,
							"payment": "支付宝-余额",
							"note": "午餐-外卖",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-23",
					"weekday": "周四",
					"records": [{
							"time": "09:00:00",
							"type": "income",
							"category": "理财",
							"amount": 1500.00,
							"payment": "银行转账",
							"note": "理财产品收益",
							"status": "completed"
						},
						{
							"time": "20:00:00",
							"type": "expense",
							"category": "娱乐",
							"amount": 80.00,
							"payment": "微信支付-零钱",
							"note": "电影票",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-24",
					"weekday": "周五",
					"records": [{
							"time": "08:30:00",
							"type": "expense",
							"category": "餐饮",
							"amount": 15.00,
							"payment": "校园卡",
							"note": "食堂早餐",
							"status": "completed"
						},
						{
							"time": "18:30:00",
							"type": "expense",
							"category": "购物",
							"amount": 600.00,
							"payment": "支付宝-花呗",
							"note": "购买电子产品",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-25",
					"weekday": "周六",
					"records": [{
							"time": "12:00:00",
							"type": "expense",
							"category": "餐饮",
							"amount": 50.00,
							"payment": "微信支付-零钱",
							"note": "朋友聚餐",
							"status": "completed"
						},
						{
							"time": "16:00:00",
							"type": "income",
							"category": "兼职",
							"amount": 800.00,
							"payment": "现金",
							"note": "周末兼职收入",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-26",
					"weekday": "周日",
					"records": [{
							"time": "10:00:00",
							"type": "expense",
							"category": "旅行",
							"amount": 1200.00,
							"payment": "支付宝-余额",
							"note": "周末短途旅行",
							"status": "completed"
						},
						{
							"time": "21:00:00",
							"type": "expense",
							"category": "娱乐",
							"amount": 100.00,
							"payment": "微信支付-零钱",
							"note": "酒吧消费",
							"status": "completed"
						}
					]
				},
				{
					"date": "2023-03-27",
					"weekday": "周一",
					"records": [{
							"time": "08:00:00",
							"type": "expense",
							"category": "交通",
							"amount": 8.00,
							"payment": "公交卡",
							"note": "公交上班",
							"status": "completed"
						},
						{
							"time": "12:30:00",
							"type": "expense",
							"category": "餐饮",
							"amount": 30.00,
							"payment": "支付宝-余额",
							"note": "午餐-外卖",
							"status": "completed"
						}
					]
				}
			]
		}
	},
	getters:{
		
		// 获取所有日期(原数据起始日期至今)
		completionDate() {
			// 辅助函数：将日期字符串转换为本地Date对象（午夜时间）
			const parseLocalDate = (dateStr) => {
				const [year, month, day] = dateStr.split('-').map(Number);
				return new Date(year, month - 1, day); // 月份从0开始
			};
		
			// 获取起始和结束日期字符串
			const startDateStr = this.datalist[0].date;
			const endDateStr = getNowDate().date;
		
			// 转换为Date对象
			let currentDate = parseLocalDate(startDateStr);
			const endDate = parseLocalDate(endDateStr);
		
			const dateArr = [];
			
			// 循环直到当前日期超过结束日期
			while (currentDate <= endDate) {
				// 格式化为YYYY-MM-DD
				const formattedDate = [
					currentDate.getFullYear(),
					String(currentDate.getMonth() + 1).padStart(2, '0'),
					String(currentDate.getDate()).padStart(2, '0')
				].join('-');
				
				dateArr.push(formattedDate);
				
				// 增加一天
				currentDate.setDate(currentDate.getDate() + 1);
			}
			return dateArr;
		},
		
		// 填充所有日期
		fillData(){
			this.completionDate.forEach(date => {
				// 判断日期是否存在
				const dayData = this.datalist.find(d => d.date === date);
				if (!dayData) {
					// 不存在则创建一个新的日期对象
					const newDay = {
						date: date,
						weekday: '',
						records: []
					};
					// 添加到datalist中
					this.datalist.push(newDay);
					// 对日期进行排序
					this.datalist.sort((a, b) => {
						const dateA = new Date(a.date);
						const dateB = new Date(b.date);
						return dateA - dateB;
					});
				}	
			})	
		},
		
		// 获取最后一天的信息
		getLastData(){
			return this.datalist[this.datalist.length-1]
		}
	},
	actions: {
		// 获取一周数据
		getWeekData(targetDate){
			
		},
		// 获取一月数据
		getMonthData(targetDate){
			
		},
		// 获取一年数据
		getYearData(targetDate){
			
		},
		// 获取单日统计
		getTotalDay(targetDate) {
			// 判断日期是否存在
			const dayData = this.datalist.find(d => d.date === targetDate);
			if (!dayData) return {
				income: 0,
				expense: 0
			};
			
			return dayData.records.reduce((acc, record) => {
				record.type === 'income' 
				  ? acc.income += record.amount
				  : acc.expense += record.amount;
				return acc;
			}, {
				income: 0,
				expense: 0
			});
		},
		
		// 获取周统计
		 getTotalWeek(targetDate) {
		      const date = new Date(targetDate);
			  // 计算周一的日期 (目标的日期-星期几+(如果是周日？-6:+1))
		      const weekStart = new Date(date.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)));
		      const weekEnd = new Date(weekStart);
		      weekEnd.setDate(weekStart.getDate() + 6);
		
		      return this.datalist.reduce((acc, day) => {
		        const dayDate = new Date(day.date);
				// 截取目标周内的日期的数据
		        if (dayDate >= weekStart && dayDate <= weekEnd) {
		          day.records.forEach(record => {
		            record.type === 'income' 
		              ? acc.income += record.amount 
		              : acc.expense += record.amount;
		          });
		        }
		        return acc;
		      }, { income: 0, expense: 0 });
		    },
			
		// 获取月统计 e.g ('2025-3')
		 getTotalMon(targetDate) {
		      return this.datalist.reduce((acc, day) => {
		        if (day.date.startsWith(targetDate)) {
		          day.records.forEach(record => {
		            record.type === 'income' 
		              ? acc.income += record.amount 
		              : acc.expense += record.amount;
		          });
		        }
		        return acc;
		      }, { income: 0, expense: 0 });
		    },
			
		// 获取年统计 e.g ('2025')
		 getTotalYear(targetDate) {
		      return this.datalist.reduce((acc, day) => {
		        if (day.date.startsWith(targetDate)) {
		          day.records.forEach(record => {
		            record.type === 'income' 
		              ? acc.income += record.amount 
		              : acc.expense += record.amount;
		          });
		        }
		        return acc;
		      }, { income: 0, expense: 0 });
		},
		
		// 分类统计
		getCategoryPercentages(startDate,endDate){
			const start = new Date(startDate);
			const end = new Date(endDate);
			// 过滤目标日期的数据
			const filteredData = this.datalist.filter(day => {
				const date = new Date(day.date);
				return date >= start && date <= end;
			});

			const categoryIncome = {};
			const categoryExpense = {};
			let totalIncome = 0;
			let totalExpense = 0;

			  // 遍历筛选后的数据
			  filteredData.forEach(day => {
				day.records.forEach(record => {
					if (record.type === 'income') {
						// 累加收入
						totalIncome += record.amount;
						if (!categoryIncome[record.category]) {
							categoryIncome[record.category] = 0;
						}
						categoryIncome[record.category] += record.amount;
					} else {
						// 累加支出
						totalExpense += record.amount;
						if (!categoryExpense[record.category]) {
							categoryExpense[record.category] = 0;
						}
						categoryExpense[record.category] += record.amount;
					}
				});
			});
			
			// 计算百分比
			const categoryIncomePercentages = {};
			const categoryExpensePercentages = {};
			for (const category in categoryIncome) {
				categoryIncomePercentages[category] = ((categoryIncome[category] / totalIncome) * 100).toFixed(2);
		
			}
			for (const category in categoryExpense) {
				categoryExpensePercentages[category] = ((categoryExpense[category] / totalExpense) * 100).toFixed(2);
			}

			return {
				income: categoryIncomePercentages,
				expense: categoryExpensePercentages	
			}
		}

		
	}
})