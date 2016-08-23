/**
 * Created by Administrator on 2016/8/4 0004.
 */
(function () {

    function sort(numbers) {
        for (var i = 0; i < numbers.length; i++) {
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[j] > numbers[i]) {
                    numbers[i] = numbers[i] + numbers[j];
                    numbers[j] = numbers[i] - numbers[j];
                    numbers[i] = numbers[i] - numbers[j];
                }
            }
        }
    }

    window.sort = sort;
})();

