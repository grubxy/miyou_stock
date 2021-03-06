const defaultStaffModal = {
	staff: false
}

export const staffModal = (state = defaultStaffModal, action) => {
	switch (action.type) {
		case 'STAFF_MODAL_OPERATE':
			return { ...state,
				...action.data
			}
		case 'STAFF_MODAL_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'STAFF_MODAL_CLEAR':
			return defaultStaffModal
		default:
			return state
	}
}

const defaultStaffTable = {
	content: [],
	headers: {
		name: {
			title: '员工'
		},
		phone: {
			title: '电话号码'
		},
		status: {
			title: '在职状态'
		},
		button_list: {
			title: ''
		}
	},
	selectable: false,
	showFooter: true,
	search: {},
	totalPages: 0,
	activePage: 0,
	size: 20
}

export const staffInfoTable = (state = defaultStaffTable, action) => {
	switch (action.type) {
		case 'UPDATE_STAFFINFO_TABLE':
			return { ...state,
				content: action.data
			}
		case 'UPDATE_STAFFINFO_TABLE_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'UPDATE_STAFFINFO_SEARCH_CHANGE':
			return { ...state,
				search: { ...state.search,
					[action.name]: action.value
				}
			}
		default:
			return state
	}
}

const defaultSchedule = {
	content: [],
	headers: {
		staffName: {
			title: '员工'
		},
		idConstr: {
			title: '施工单号'
		},
		stateConstr: {
			title: '工单状态'
		},
		dstConstr: {
			title: '工单计划生产数'
		},
		idProduction: {
			title: '生产批次'
		},
		productName: {
			title: '产品名'
		},
		dstProduct: {
			title: '产品计划生产数'
		}

	},
	selectable: false,
	showFooter: true,
	search: {},
	totalPages: 0,
	activePage: 0,
	size: 20
}

export const staffScheduleTable = (state = defaultSchedule, action) => {
	switch (action.type) {
		case 'UPDATE_STAFFSCHEDULE_TABLE':
			return { ...state,
				content: action.data
			}
		case 'UPDATE_STAFFSCHEDULE_TABLE_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'UPDATE_STAFFSCHEDULE_SEARCH_CHANGE':
			return { ...state,
				search: { ...state.search,
					[action.name]: action.value
				}
			}
		default:
			return state
	}
}

const defaultSalary = {
	content: [],
	headers: {
		name: {
			title: '姓名'
		},
		pay: {
			title: '工资'
		}
	},
	selectable: false,
	showFooter: true,
	search: {},
	totalPages: 0,
	activePage: 0,
	size: 20
}

export const staffSalaryTable = (state = defaultSalary, action) => {
	switch (action.type) {
		case 'UPDATE_STAFFSALARY_TABLE':
			return { ...state,
				content: action.data
			}
		case 'UPDATE_STAFFSALARY_TABLE_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'UPDATE_STAFFSALARY_SEARCH_CHANGE':
			return {
				...state,
				search: { ...state.search,
					[action.name]: action.value
				}
			}
		default:
			return state
	}
}