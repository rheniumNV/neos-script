import { member, Member, Component } from "../../core";
    
    export interface ClassroomLabelInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Controller?: member<any>;
ItemIndex?: member<number>;
ContentDriver?: member<any>;
_text?: member<any>;
    }
    
    export function ClassroomLabel(props: ClassroomLabelInput){
      const { id, persistentId, updateOrder, Enabled,
Controller,
ItemIndex,
ContentDriver,
_text, } = props;
    
      return (
        <Component type="BusinessX.ClassroomLabel" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomDatabaseController]`} name="Controller" id={typeof Controller === "object" && "id" in Controller ? Controller?.id : undefined} value={typeof Controller === "object" && "value" in Controller ? Controller?.value : Controller} /* default: ID0 */  isRaw={typeof Controller === "object" && "isRaw" in Controller && Controller.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ItemIndex" id={typeof ItemIndex === "object" && "id" in ItemIndex ? ItemIndex?.id : undefined} value={typeof ItemIndex === "object" && "value" in ItemIndex ? ItemIndex?.value : ItemIndex} /* default: 0 */  isRaw={typeof ItemIndex === "object" && "isRaw" in ItemIndex && ItemIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LabelContentDriver]`} name="ContentDriver" id={typeof ContentDriver === "object" && "id" in ContentDriver ? ContentDriver?.id : undefined} value={typeof ContentDriver === "object" && "value" in ContentDriver ? ContentDriver?.value : ContentDriver} /* default: ID0 */  isRaw={typeof ContentDriver === "object" && "isRaw" in ContentDriver && ContentDriver.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.TextRenderer]`} name="_text" id={typeof _text === "object" && "id" in _text ? _text?.id : undefined} value={typeof _text === "object" && "value" in _text ? _text?.value : _text} /* default: ID0 */  isRaw={typeof _text === "object" && "isRaw" in _text && _text.isRaw ? true : undefined} />
        </Component>
      );
    };
    