import { member, Member, Component } from "../../core";
    
    export interface ViolentAprilFoolsExplosionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BloatMagnitude?: member<number>;
_bloatingClip?: member<any>;
_explosionClip?: member<any>;
    }
    
    export function ViolentAprilFoolsExplosion(props: ViolentAprilFoolsExplosionInput){
      const { id, persistentId, updateOrder, Enabled,
BloatMagnitude,
_bloatingClip,
_explosionClip, } = props;
    
      return (
        <Component type="FrooxEngine.ViolentAprilFoolsExplosion" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BloatMagnitude" id={typeof BloatMagnitude === "object" && "id" in BloatMagnitude ? BloatMagnitude?.id : undefined} value={typeof BloatMagnitude === "object" && "value" in BloatMagnitude ? BloatMagnitude?.value : BloatMagnitude} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_bloatingClip" id={typeof _bloatingClip === "object" && "id" in _bloatingClip ? _bloatingClip?.id : undefined} value={typeof _bloatingClip === "object" && "value" in _bloatingClip ? _bloatingClip?.value : _bloatingClip} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_explosionClip" id={typeof _explosionClip === "object" && "id" in _explosionClip ? _explosionClip?.id : undefined} value={typeof _explosionClip === "object" && "value" in _explosionClip ? _explosionClip?.value : _explosionClip} /* default: ID0 */  />
        </Component>
      );
    };
    