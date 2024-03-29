import { member, Member, Component } from "../../core";
    
    export interface SugarCubeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BatchId?: member<any>;
SequenceNumber?: member<number>;
_visualRoot?: member<any>;
    }
    
    export function SugarCube(props: SugarCubeInput){
      const { id, persistentId, updateOrder, Enabled,
BatchId,
SequenceNumber,
_visualRoot, } = props;
    
      return (
        <Component type="FrooxEngine.SugarCube" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="BatchId" id={typeof BatchId === "object" && "id" in BatchId ? BatchId?.id : undefined} value={typeof BatchId === "object" && "value" in BatchId ? BatchId?.value : BatchId} /* default: <i>null</i> */  isRaw={typeof BatchId === "object" && "isRaw" in BatchId && BatchId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SequenceNumber" id={typeof SequenceNumber === "object" && "id" in SequenceNumber ? SequenceNumber?.id : undefined} value={typeof SequenceNumber === "object" && "value" in SequenceNumber ? SequenceNumber?.value : SequenceNumber} /* default: 0 */  isRaw={typeof SequenceNumber === "object" && "isRaw" in SequenceNumber && SequenceNumber.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualRoot" id={typeof _visualRoot === "object" && "id" in _visualRoot ? _visualRoot?.id : undefined} value={typeof _visualRoot === "object" && "value" in _visualRoot ? _visualRoot?.value : _visualRoot} /* default: ID0 */  isRaw={typeof _visualRoot === "object" && "isRaw" in _visualRoot && _visualRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    