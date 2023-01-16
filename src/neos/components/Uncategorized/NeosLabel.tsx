import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NeosLabelInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TextRenderer?: member<any>;
BaseColor?: member<[number, number, number, number]>;
BaseColorElement?: member<any>;
Brightness?: member<number>;
LerpRatio?: member<number>;
LerpColor?: member<[number, number, number, number]>;
_textColor?: member<any>;
    }
    
    export function NeosLabel(props: NeosLabelInput){
      const { id, persistentId, updateOrder, Enabled,
TextRenderer,
BaseColor,
BaseColorElement,
Brightness,
LerpRatio,
LerpColor,
_textColor, } = props;
    
      return (
        <Component type="FrooxEngine.NeosLabel" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="TextRenderer" id={typeof TextRenderer === "object" && "id" in TextRenderer ? TextRenderer?.id : undefined} value={typeof TextRenderer === "object" && "value" in TextRenderer ? TextRenderer?.value : TextRenderer} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BaseColor" id={typeof BaseColor === "object" && "id" in BaseColor ? BaseColor?.id : undefined} value={typeof BaseColor === "object" && "value" in BaseColor ? BaseColor?.value : BaseColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.INeosUIElement]`} name="BaseColorElement" id={typeof BaseColorElement === "object" && "id" in BaseColorElement ? BaseColorElement?.id : undefined} value={typeof BaseColorElement === "object" && "value" in BaseColorElement ? BaseColorElement?.value : BaseColorElement} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Brightness" id={typeof Brightness === "object" && "id" in Brightness ? Brightness?.id : undefined} value={typeof Brightness === "object" && "value" in Brightness ? Brightness?.value : Brightness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LerpRatio" id={typeof LerpRatio === "object" && "id" in LerpRatio ? LerpRatio?.id : undefined} value={typeof LerpRatio === "object" && "value" in LerpRatio ? LerpRatio?.value : LerpRatio} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="LerpColor" id={typeof LerpColor === "object" && "id" in LerpColor ? LerpColor?.id : undefined} value={typeof LerpColor === "object" && "value" in LerpColor ? LerpColor?.value : LerpColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_textColor" id={typeof _textColor === "object" && "id" in _textColor ? _textColor?.id : undefined} value={typeof _textColor === "object" && "value" in _textColor ? _textColor?.value : _textColor} /* default: ID0 */  />
        </Component>
      );
    };
    