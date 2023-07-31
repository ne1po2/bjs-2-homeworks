function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args); 
    let objectInCache = cache.find((item) => item.hash === hash); 
    if (objectInCache) { 
      console.log("Из кеша: " + objectInCache.result);
      return "Из кеша: " + objectInCache.result;
    }

    let result = func(...args); 
    cache.push({ hash, result }); 
    if (cache.length > 5) {
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, timeout) {
  let timerId;
  let count = 0;
  let allCount = 0;

  function wrapper(...args) {
    clearTimeout(timerId);
    const isFirstCall = !timerId;

    if (isFirstCall) {
      func(...args);
      count++;
    }

    timerId = setTimeout(() => {
      timerId = null;
      if (!isFirstCall) {
        func(...args);
      }
    }, timeout);

    allCount++;
  }

  Object.defineProperty(wrapper, 'count', {
    get: function () {
      return count;
    },
  });

  Object.defineProperty(wrapper, 'allCount', {
    get: function () {
      return allCount;
    },
  });

  return wrapper;
}