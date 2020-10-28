import webpack from "webpack";

interface MergerProps extends webpack.Configuration {}

//TODO [] -> string[], target, obj prop types ?

const storeV = () => {
    let value: [] = [];
    return (v: []) => {
        return value = [ ...value, ...v ];
    }
}

//always contain value
const store = storeV();

export const merger = (conf: MergerProps, subConf: MergerProps): MergerProps => {
    let target = {};
    const args = [conf, subConf];

    let merge = (obj: MergerProps) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === '[object Object]' && target[prop]) {
                    if (Object.getOwnPropertyNames(obj[prop])[0] === Object.getOwnPropertyNames(target[prop])[0]) {
                        //TODO
                        target[prop] = { rules: [...target[prop].rules, ...obj[prop].rules] }
                    } else {
                        target[prop] = merger(target[prop], obj[prop]);
                    }
                }
                else if (Object.prototype.toString.call(obj[prop]) === '[object Array]' && target[prop]) {
                    target[prop] = [ ...target[prop], ...obj[prop] ];
                }
                else {
                    target[prop] = obj[prop];
                }
            }
        }
    };

    args.map(el => merge(el))

    return target;
};
