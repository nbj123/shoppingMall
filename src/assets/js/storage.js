const storage = window.localStorage;

export default {
  set(key, val) { //设置序列化 转换成字符串
    if (val === undefined) {
      return;
    }
    storage.setItem(key, serialize(val)); 
  },
  get(key, def) {  // 反序列化  转换成json
    const val = deserialize(storage.getItem(key)); 
    return val === undefined ? def : val;
  },
  remove(key) {
    storage.removeItem(key);
  },
  clear() {
    storage.clear();
  }
};

function serialize(val) {   //把传进来的值变成字符串
  return JSON.stringify(val);
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}
