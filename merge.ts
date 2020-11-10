import webpack from "webpack";
var defaultIsMergeableObject = require('is-mergeable-object')

interface MergerProps extends webpack.Configuration {}

//@ts-ignore
// const combineMerge = (target, source) => {
//     const destination = target.slice()
//
//     source.forEach((item, index) => {
//         if (typeof destination[index] === 'undefined') {
//             destination[index] = cloneUnlessOtherwiseSpecified(item)
//         } else if (isMergeableObject(item)) {
//             destination[index] = merge(target[index], item)
//         } else if (target.indexOf(item) === -1) {
//             destination.push(item)
//         }
//     })
//     return destination
// }
// export function deepMerge(...objects: object[]) {
//     const isObject = (obj: any) => obj && typeof obj === 'object';
//
//     function deepMergeInner(target: object, source: object) {
//         Object.keys(source).forEach((key: string) => {
//             const targetValue = target[key];
//             const sourceValue = source[key];
//
//             if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
//                 target[key] = targetValue.concat(sourceValue);
//             } else if (isObject(targetValue) && isObject(sourceValue)) {
//                 target[key] = deepMergeInner(Object.assign({}, targetValue), sourceValue);
//             } else {
//                 target[key] = sourceValue;
//             }
//         });
//
//         return target;
//     }
//
//     const target = objects.shift();
//     let source: object;
//
//     while (source = objects.shift()) {
//         deepMergeInner(target, source);
//     }
//
//     return target;
// }


// const storeV = () => {
//     return (target: {}, o: []) => {
//         return o.map(el => {
//             //!compare
//             //@ts-ignore
//             //O^2
//             return el;
//         })
//     }
// }
//
// //@ts-ignore
// const smartSplit = (t, o) => {
//     const store = storeV();
//     return t.map(el => {
//         return store(el, o)
//     })
// }merger

export const merger = (conf: MergerProps, subConf: MergerProps): MergerProps => {
    let target = {};
    const args = [conf, subConf];

    let merge = (obj: MergerProps) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === '[object Object]' && target[prop]) {
                    target[prop] = merger(target[prop], obj[prop]);
                }
                else if (Object.prototype.toString.call(obj[prop]) === '[object Array]' && target[prop]) {
                    // console.log("target", target[prop])
                    // console.log("obj", obj[prop])
                    // // merger()
                    // target[prop] = [ ...val];
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
