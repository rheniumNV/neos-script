import { member, Member, Component } from "../../core";
    
    export interface Display_ColorXInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<any>;
_text0?: member<string>;
_text1?: member<string>;
_text2?: member<string>;
_text3?: member<string>;
_color?: member<any>;
    }
    
    export function Display_ColorX(props: Display_ColorXInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
_text0,
_text1,
_text2,
_text3,
_color, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Display.Display_ColorX" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.colorX]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text0" id={typeof _text0 === "object" && "id" in _text0 ? _text0?.id : undefined} value={typeof _text0 === "object" && "value" in _text0 ? _text0?.value : _text0} /* default: ID0 */  isRaw={typeof _text0 === "object" && "isRaw" in _text0 && _text0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text1" id={typeof _text1 === "object" && "id" in _text1 ? _text1?.id : undefined} value={typeof _text1 === "object" && "value" in _text1 ? _text1?.value : _text1} /* default: ID0 */  isRaw={typeof _text1 === "object" && "isRaw" in _text1 && _text1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text2" id={typeof _text2 === "object" && "id" in _text2 ? _text2?.id : undefined} value={typeof _text2 === "object" && "value" in _text2 ? _text2?.value : _text2} /* default: ID0 */  isRaw={typeof _text2 === "object" && "isRaw" in _text2 && _text2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text3" id={typeof _text3 === "object" && "id" in _text3 ? _text3?.id : undefined} value={typeof _text3 === "object" && "value" in _text3 ? _text3?.value : _text3} /* default: ID0 */  isRaw={typeof _text3 === "object" && "isRaw" in _text3 && _text3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.colorX]`} name="_color" id={typeof _color === "object" && "id" in _color ? _color?.id : undefined} value={typeof _color === "object" && "value" in _color ? _color?.value : _color} /* default: ID0 */  isRaw={typeof _color === "object" && "isRaw" in _color && _color.isRaw ? true : undefined} />
        </Component>
      );
    };
    