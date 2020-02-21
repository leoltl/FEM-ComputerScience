
// utils
function findStudentIds(record) {
	return record.id
}
function findRecordById(studentId) {
	return studentRecords.find(function matchId(studentRecord) {
			return studentRecord.id == studentId
		})
}

//end utils

function printRecords(recordIds) {
	
	function byName(a,b) {
		if (a.name < b.name) return -1;
		if (b.name < a.name) return 1;
		return 0
	}
	function formatAndLog(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? 'Paid' : "Not Paid"}`)
	}
	recordIds.map(findRecordById).sort(byName).forEach(formatAndLog)
}


function paidStudentsToEnroll() {
	function findPaid(record) {
		return record.paid
	}
	function findNotEnrolled(record) {
		return !currentEnrollment.includes(record.id)
	}
	const paidButNotEnrolledStudentIDs = studentRecords.filter(findPaid).filter(findNotEnrolled).map(findStudentIds)
	return [...currentEnrollment, ...paidButNotEnrolledStudentIDs]
}

function remindUnpaid(recordIds) {
	function findUnpaid(record) {
		return !record.paid
	}
	printRecords(recordIds.map(findRecordById).filter(findUnpaid).map(findStudentIds))
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
