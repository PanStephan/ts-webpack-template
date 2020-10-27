// TODO: ts-refactor
// TODO: store init

export const merge = (conf, subConf) => {
    let target = {};
    const args = [conf, subConf];

    let merger = (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === '[object Object]' && target[prop]) {
                    // TODO deep - array acc
                    if (Object.getOwnPropertyNames(obj[prop])[0] === Object.getOwnPropertyNames(target[prop])[0]) {
                        target[prop] = [...obj[prop].rules, ...target[prop].rules]
                    } else {
                        target[prop] = merge(target[prop], obj[prop]);
                    }
                } else {
                    target[prop] = obj[prop];
                }
            }
        }
    };

    args.map(el => merger(el))

    return target;
};






// const storeP = () => {
//     let value = {};
//     return (v) => {
//         return value = { ...value, ...v }
//     }
// }
//
// const store = storeP();