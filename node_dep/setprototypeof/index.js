module.exports = Object.setPrototypeOf || ({__proto__:[]} instanceof Array ? setProtoOf : mixinProperties);

function setProtoOf(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

function mixinProperties(obj, proto) {
	for (var prop in proto) {
<<<<<<< HEAD
		if (!obj.hasOwnProperty(prop)) {
			obj[prop] = proto[prop];
		}
=======
		obj[prop] = proto[prop];
>>>>>>> 3066da72f57277c3d2d26e47bb5d95cdef6ab2bb
	}
	return obj;
}
