import { member, Member, Component } from "../../core";
    
    export interface StoragePurchaseDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_message?: member<any>;
_costMessage?: member<any>;
_buyButton?: member<any>;
_cancelButton?: member<any>;
_gigabytes?: member<number>;
_months?: member<number>;
_cost?: member<number>;
    }
    
    export function StoragePurchaseDialog(props: StoragePurchaseDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_message,
_costMessage,
_buyButton,
_cancelButton,
_gigabytes,
_months,
_cost, } = props;
    
      return (
        <Component type="FrooxEngine.StoragePurchaseDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_message" id={typeof _message === "object" && "id" in _message ? _message?.id : undefined} value={typeof _message === "object" && "value" in _message ? _message?.value : _message} /* default: ID0 */  isRaw={typeof _message === "object" && "isRaw" in _message && _message.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_costMessage" id={typeof _costMessage === "object" && "id" in _costMessage ? _costMessage?.id : undefined} value={typeof _costMessage === "object" && "value" in _costMessage ? _costMessage?.value : _costMessage} /* default: ID0 */  isRaw={typeof _costMessage === "object" && "isRaw" in _costMessage && _costMessage.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_buyButton" id={typeof _buyButton === "object" && "id" in _buyButton ? _buyButton?.id : undefined} value={typeof _buyButton === "object" && "value" in _buyButton ? _buyButton?.value : _buyButton} /* default: ID0 */  isRaw={typeof _buyButton === "object" && "isRaw" in _buyButton && _buyButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_cancelButton" id={typeof _cancelButton === "object" && "id" in _cancelButton ? _cancelButton?.id : undefined} value={typeof _cancelButton === "object" && "value" in _cancelButton ? _cancelButton?.value : _cancelButton} /* default: ID0 */  isRaw={typeof _cancelButton === "object" && "isRaw" in _cancelButton && _cancelButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_gigabytes" id={typeof _gigabytes === "object" && "id" in _gigabytes ? _gigabytes?.id : undefined} value={typeof _gigabytes === "object" && "value" in _gigabytes ? _gigabytes?.value : _gigabytes} /* default: 0 */  isRaw={typeof _gigabytes === "object" && "isRaw" in _gigabytes && _gigabytes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_months" id={typeof _months === "object" && "id" in _months ? _months?.id : undefined} value={typeof _months === "object" && "value" in _months ? _months?.value : _months} /* default: 0 */  isRaw={typeof _months === "object" && "isRaw" in _months && _months.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Decimal]`} name="_cost" id={typeof _cost === "object" && "id" in _cost ? _cost?.id : undefined} value={typeof _cost === "object" && "value" in _cost ? _cost?.value : _cost} /* default: 0 */  isRaw={typeof _cost === "object" && "isRaw" in _cost && _cost.isRaw ? true : undefined} />
        </Component>
      );
    };
    