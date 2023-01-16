import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarBadgeManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BadgeSize?: member<number>;
BadgeSeparation?: member<number>;
MaxRowSize?: member<number>;
_badgesRoot?: member<any>;
_badgesOffset?: member<any>;
    }
    
    export function AvatarBadgeManager(props: AvatarBadgeManagerInput){
      const { id, persistentId, updateOrder, Enabled,
BadgeSize,
BadgeSeparation,
MaxRowSize,
_badgesRoot,
_badgesOffset, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarBadgeManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BadgeSize" id={typeof BadgeSize === "object" && "id" in BadgeSize ? BadgeSize?.id : undefined} value={typeof BadgeSize === "object" && "value" in BadgeSize ? BadgeSize?.value : BadgeSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BadgeSeparation" id={typeof BadgeSeparation === "object" && "id" in BadgeSeparation ? BadgeSeparation?.id : undefined} value={typeof BadgeSeparation === "object" && "value" in BadgeSeparation ? BadgeSeparation?.value : BadgeSeparation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxRowSize" id={typeof MaxRowSize === "object" && "id" in MaxRowSize ? MaxRowSize?.id : undefined} value={typeof MaxRowSize === "object" && "value" in MaxRowSize ? MaxRowSize?.value : MaxRowSize} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_badgesRoot" id={typeof _badgesRoot === "object" && "id" in _badgesRoot ? _badgesRoot?.id : undefined} value={typeof _badgesRoot === "object" && "value" in _badgesRoot ? _badgesRoot?.value : _badgesRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_badgesOffset" id={typeof _badgesOffset === "object" && "id" in _badgesOffset ? _badgesOffset?.id : undefined} value={typeof _badgesOffset === "object" && "value" in _badgesOffset ? _badgesOffset?.value : _badgesOffset} /* default: ID0 */  />
        </Component>
      );
    };
    