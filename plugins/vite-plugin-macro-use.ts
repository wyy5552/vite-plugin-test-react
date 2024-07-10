/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
export default function macroUse(def: {
  OTHER: boolean
}) {
  console.log('macroUse', def);
  console.log('macroUse', def.OTHER);
  return {
    name: 'macro-use',
    load(id: string) {
      console.log('load', id);
      // 处理的数组文件
      const filesTypes = ['.ts', '.tsx', '.vue','.css','.scss'];
      // 获取文件后缀
      const fileType = id.slice(id.lastIndexOf('.'));
      if (filesTypes.includes(fileType)) {
        let code = fs.readFileSync(id, 'utf-8');
        /**
          * //#if OTHER
          * console.log('Other mode')
          * //#endif 
         */
        code = code.replace(/\/\/#if OTHER\n([\s\S]*?)\n\/\/#endif/g, function (match, p1) {
          return def.OTHER ? p1 : '';
        });
        /**
          * {#if OTHER}
          * console.log('Other mode')
          * {#endif}
         */
        code = code.replace(/\{\/\* #if OTHER \*\/\}\n([\s\S]*) \{\/\* #endif \*\/\}/g, function (match, p1) {
          return def.OTHER ? p1 : '';
        });
        /**
         * <!-- #if OTHER -->
         * <div>Other mode</div>
         * <!-- #endif -->
         */
        code = code.replace(/<!-- #if OTHER -->\n([\s\S]*)<!-- #endif -->/g, function (match, p1) {
          return def.OTHER ? p1 : '';
        });
        return code;
      }


    }
  }
}