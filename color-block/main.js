$(function() {
	var arr = [
		[false]
	]

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
			console.log($(this).attr("value"));
			console.log($(this).attr("position").split(","));
			var posArr = $(this).attr("position").split(",");
			var x = +posArr[0];
			var y = +posArr[1];

			if (undefined !== arr[x - 1]) {
				if(undefined !== arr[x - 1][y]){
					arr[x - 1][y] = !arr[x - 1][y];
				}
				
			}
			if (undefined !== arr[x + 1]) {
				if(undefined !== arr[x + 1][y]){
					arr[x + 1][y] = !arr[x + 1][y];
				}
				
			}
			if (undefined !== arr[x]) {
				if(undefined !== arr[x][y-1]){
					arr[x][y-1] = !arr[x][y-1];
				}
				
			}
			if (undefined !== arr[x]) {
				if(undefined !== arr[x][y+1]){
					arr[x][y+1] = !arr[x][y+1];
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
			for(var k =0;k<arr.length +1;k++){
				newArr[k] =new Array();
				for(var h =0;h<arr.length +1;h++){
					newArr[k][h] = false;
				}
			}
			arr = newArr;

			// var length = arr.length;
			// for(var k =0;k<length;k++){
			// 	for(var h =0;h<length;h++){
			// 		arr[k][h] = !arr[k][h];
			// 	}
			// }

			// for(var k =0;k<arr.length;k++){
			// 	arr[k][arr.length] = false;
			// }
			// arr[arr.length] = [];
			// for(var h =0; h<arr.length;h++){
			// 	arr[arr.length-1][h] = false;
			// }
			draw(arr);
		}
		test();
	}

	draw(arr);


})
