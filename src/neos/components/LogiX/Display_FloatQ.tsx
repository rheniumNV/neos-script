import { member, Member, Component } from "../../core";
    
    export interface Display_FloatQInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<[number, number, number, number]>;
_text0?: member<string>;
_text1?: member<string>;
_text2?: member<string>;
_text3?: member<string>;
_eulerX?: member<string>;
_eulerY?: member<string>;
_eulerZ?: member<string>;
    }
    
    export function Display_FloatQ(props: Display_FloatQInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
_text0,
_text1,
_text2,
_text3,
_eulerX,
_eulerY,
_eulerZ, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Display.Display_FloatQ" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text0" id={typeof _text0 === "object" && "id" in _text0 ? _text0?.id : undefined} value={typeof _text0 === "object" && "value" in _text0 ? _text0?.value : _text0} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text1" id={typeof _text1 === "object" && "id" in _text1 ? _text1?.id : undefined} value={typeof _text1 === "object" && "value" in _text1 ? _text1?.value : _text1} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text2" id={typeof _text2 === "object" && "id" in _text2 ? _text2?.id : undefined} value={typeof _text2 === "object" && "value" in _text2 ? _text2?.value : _text2} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text3" id={typeof _text3 === "object" && "id" in _text3 ? _text3?.id : undefined} value={typeof _text3 === "object" && "value" in _text3 ? _text3?.value : _text3} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_eulerX" id={typeof _eulerX === "object" && "id" in _eulerX ? _eulerX?.id : undefined} value={typeof _eulerX === "object" && "value" in _eulerX ? _eulerX?.value : _eulerX} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_eulerY" id={typeof _eulerY === "object" && "id" in _eulerY ? _eulerY?.id : undefined} value={typeof _eulerY === "object" && "value" in _eulerY ? _eulerY?.value : _eulerY} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_eulerZ" id={typeof _eulerZ === "object" && "id" in _eulerZ ? _eulerZ?.id : undefined} value={typeof _eulerZ === "object" && "value" in _eulerZ ? _eulerZ?.value : _eulerZ} /* default: ID0 */  />
        </Component>
      );
    };
    