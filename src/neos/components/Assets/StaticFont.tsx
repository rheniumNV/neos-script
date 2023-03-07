import { member, Member, Component } from "../../core";
    
    export interface StaticFontInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
Padding?: member<number>;
PixelRange?: member<number>;
GlyphEmSize?: member<number>;
    }
    
    export function StaticFont(props: StaticFontInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
Padding,
PixelRange,
GlyphEmSize, } = props;
    
      return (
        <Component type="FrooxEngine.StaticFont" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Padding" id={typeof Padding === "object" && "id" in Padding ? Padding?.id : undefined} value={typeof Padding === "object" && "value" in Padding ? Padding?.value : Padding} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="PixelRange" id={typeof PixelRange === "object" && "id" in PixelRange ? PixelRange?.id : undefined} value={typeof PixelRange === "object" && "value" in PixelRange ? PixelRange?.value : PixelRange} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="GlyphEmSize" id={typeof GlyphEmSize === "object" && "id" in GlyphEmSize ? GlyphEmSize?.id : undefined} value={typeof GlyphEmSize === "object" && "value" in GlyphEmSize ? GlyphEmSize?.value : GlyphEmSize} /* default: 0 */  />
        </Component>
      );
    };
    