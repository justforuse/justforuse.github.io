$(function() {
	var arr = [
		[false]
	];
	var arrLength;
	function draw(arr) {
		$(".container").empty();
		for (var i = 0; i < arr.length; i++) {
			var parent = $(".container").append("<div></div>").children("div").eq(i).addClass("row");
			for (var j = 0; j < arr[i].length; j++) {
				var temp = $(".container").children(".row").eq(i)
					.append("<div></div>")
					.find("div").eq(j).addClass("box").addClass(function() {
						if (!arr[i][j]) {
							return "unselected";
						} else {
							return "selected";
						}
					})
					.attr("value", arr[i][j])
					.attr("position", i + "," + j)

			}
		}

		$(".box").on("click", function() {
			var posArr = $(this).attr("position").split(",");
			var x = +posArr[0];
			var y = +posArr[1];

			if (undefined !== arr[x - 1]) {
				if (undefined !== arr[x - 1][y]) {
					arr[x - 1][y] = !arr[x - 1][y];
				}

			}
			if (undefined !== arr[x + 1]) {
				if (undefined !== arr[x + 1][y]) {
					arr[x + 1][y] = !arr[x + 1][y];
				}

			}
			if (undefined !== arr[x]) {
				if (undefined !== arr[x][y - 1]) {
					arr[x][y - 1] = !arr[x][y - 1];
				}

			}
			if (undefined !== arr[x]) {
				if (undefined !== arr[x][y + 1]) {
					arr[x][y + 1] = !arr[x][y + 1];
				}

			}
			arr[x][y] = !arr[x][y];
			draw(arr);
		});

		var test = function() {
			for (var n = 0; n < arr.length; n++) {
				for (var m = 0; m < arr[n].length; m++) {
					if (!arr[n][m]) {
						return false;
					}
				}
			}
			alert("you done it!!");

			var newArr = new Array();
			for (var k = 0; k < arr.length + 1; k++) {
				newArr[k] = new Array();
				for (var h = 0; h < arr.length + 1; h++) {
					newArr[k][h] = false;
				}
			}
			arr = newArr;
			arrLength = arr.length;
			draw(arr);
		}
		test();
		arrLength = arr.length;
	}



	draw(arr);

	$(".confirm").on("click", function() {
		if ($("input").val() > 10 || $("input").val() < 1 || "" == $("input").val()) {
			return false;
		}
		var newArr = new Array();
		for (var k = 0; k < $("input").val(); k++) {
			newArr[k] = new Array();
			for (var h = 0; h < $("input").val(); h++) {
				newArr[k][h] = false;
			}
		}
		arr = newArr;
		draw(arr);
	})

	$(".retry").on("click", function() {
		console.log(arrLength);
		console.log(arr);
		var reTryArr = [];
		for (var k = 0; k < arrLength; k++) {
			reTryArr[k] = [];
			for (var h = 0; h < arrLength; h++) {
				reTryArr[k][h] = false;
			}
		}
		arr = reTryArr;

		draw(arr);
	})
})
