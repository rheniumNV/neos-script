import { member, Member, Component } from "../../core";
    
    export interface UpdateTransformInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
RestoreParent?: member<boolean>;
RestorePosition?: member<boolean>;
RestoreRotation?: member<boolean>;
RestoreScale?: member<boolean>;
ParentBefore?: member<any>;
ParentAfter?: member<any>;
LocalPositionBefore?: member<[number, number, number]>;
LocalRotationBefore?: member<any>;
LocalScaleBefore?: member<[number, number, number]>;
GlobalPositionBefore?: member<[number, number, number]>;
GlobalRotationBefore?: member<any>;
GlobalScaleBefore?: member<[number, number, number]>;
LocalPositionAfter?: member<[number, number, number]>;
LocalRotationAfter?: member<any>;
LocalScaleAfter?: member<[number, number, number]>;
GlobalPositionAfter?: member<[number, number, number]>;
GlobalRotationAfter?: member<any>;
GlobalScaleAfter?: member<[number, number, number]>;
_performed?: member<boolean>;
_description?: member<any>;
    }
    
    export function UpdateTransform(props: UpdateTransformInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
RestoreParent,
RestorePosition,
RestoreRotation,
RestoreScale,
ParentBefore,
ParentAfter,
LocalPositionBefore,
LocalRotationBefore,
LocalScaleBefore,
GlobalPositionBefore,
GlobalRotationBefore,
GlobalScaleBefore,
LocalPositionAfter,
LocalRotationAfter,
LocalScaleAfter,
GlobalPositionAfter,
GlobalRotationAfter,
GlobalScaleAfter,
_performed,
_description, } = props;
    
      return (
        <Component type="FrooxEngine.Undo.UpdateTransform" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RestoreParent" id={typeof RestoreParent === "object" && "id" in RestoreParent ? RestoreParent?.id : undefined} value={typeof RestoreParent === "object" && "value" in RestoreParent ? RestoreParent?.value : RestoreParent} /* default: false */  isRaw={typeof RestoreParent === "object" && "isRaw" in RestoreParent && RestoreParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RestorePosition" id={typeof RestorePosition === "object" && "id" in RestorePosition ? RestorePosition?.id : undefined} value={typeof RestorePosition === "object" && "value" in RestorePosition ? RestorePosition?.value : RestorePosition} /* default: false */  isRaw={typeof RestorePosition === "object" && "isRaw" in RestorePosition && RestorePosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RestoreRotation" id={typeof RestoreRotation === "object" && "id" in RestoreRotation ? RestoreRotation?.id : undefined} value={typeof RestoreRotation === "object" && "value" in RestoreRotation ? RestoreRotation?.value : RestoreRotation} /* default: false */  isRaw={typeof RestoreRotation === "object" && "isRaw" in RestoreRotation && RestoreRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RestoreScale" id={typeof RestoreScale === "object" && "id" in RestoreScale ? RestoreScale?.id : undefined} value={typeof RestoreScale === "object" && "value" in RestoreScale ? RestoreScale?.value : RestoreScale} /* default: false */  isRaw={typeof RestoreScale === "object" && "isRaw" in RestoreScale && RestoreScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ParentBefore" id={typeof ParentBefore === "object" && "id" in ParentBefore ? ParentBefore?.id : undefined} value={typeof ParentBefore === "object" && "value" in ParentBefore ? ParentBefore?.value : ParentBefore} /* default: ID0 */  isRaw={typeof ParentBefore === "object" && "isRaw" in ParentBefore && ParentBefore.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ParentAfter" id={typeof ParentAfter === "object" && "id" in ParentAfter ? ParentAfter?.id : undefined} value={typeof ParentAfter === "object" && "value" in ParentAfter ? ParentAfter?.value : ParentAfter} /* default: ID0 */  isRaw={typeof ParentAfter === "object" && "isRaw" in ParentAfter && ParentAfter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalPositionBefore" id={typeof LocalPositionBefore === "object" && "id" in LocalPositionBefore ? LocalPositionBefore?.id : undefined} value={typeof LocalPositionBefore === "object" && "value" in LocalPositionBefore ? LocalPositionBefore?.value : LocalPositionBefore} /* default: [0; 0; 0] */  isRaw={typeof LocalPositionBefore === "object" && "isRaw" in LocalPositionBefore && LocalPositionBefore.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="LocalRotationBefore" id={typeof LocalRotationBefore === "object" && "id" in LocalRotationBefore ? LocalRotationBefore?.id : undefined} value={typeof LocalRotationBefore === "object" && "value" in LocalRotationBefore ? LocalRotationBefore?.value : LocalRotationBefore} /* default: [0; 0; 0; 1] */  isRaw={typeof LocalRotationBefore === "object" && "isRaw" in LocalRotationBefore && LocalRotationBefore.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalScaleBefore" id={typeof LocalScaleBefore === "object" && "id" in LocalScaleBefore ? LocalScaleBefore?.id : undefined} value={typeof LocalScaleBefore === "object" && "value" in LocalScaleBefore ? LocalScaleBefore?.value : LocalScaleBefore} /* default: [0; 0; 0] */  isRaw={typeof LocalScaleBefore === "object" && "isRaw" in LocalScaleBefore && LocalScaleBefore.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="GlobalPositionBefore" id={typeof GlobalPositionBefore === "object" && "id" in GlobalPositionBefore ? GlobalPositionBefore?.id : undefined} value={typeof GlobalPositionBefore === "object" && "value" in GlobalPositionBefore ? GlobalPositionBefore?.value : GlobalPositionBefore} /* default: [0; 0; 0] */  isRaw={typeof GlobalPositionBefore === "object" && "isRaw" in GlobalPositionBefore && GlobalPositionBefore.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="GlobalRotationBefore" id={typeof GlobalRotationBefore === "object" && "id" in GlobalRotationBefore ? GlobalRotationBefore?.id : undefined} value={typeof GlobalRotationBefore === "object" && "value" in GlobalRotationBefore ? GlobalRotationBefore?.value : GlobalRotationBefore} /* default: [0; 0; 0; 1] */  isRaw={typeof GlobalRotationBefore === "object" && "isRaw" in GlobalRotationBefore && GlobalRotationBefore.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="GlobalScaleBefore" id={typeof GlobalScaleBefore === "object" && "id" in GlobalScaleBefore ? GlobalScaleBefore?.id : undefined} value={typeof GlobalScaleBefore === "object" && "value" in GlobalScaleBefore ? GlobalScaleBefore?.value : GlobalScaleBefore} /* default: [0; 0; 0] */  isRaw={typeof GlobalScaleBefore === "object" && "isRaw" in GlobalScaleBefore && GlobalScaleBefore.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalPositionAfter" id={typeof LocalPositionAfter === "object" && "id" in LocalPositionAfter ? LocalPositionAfter?.id : undefined} value={typeof LocalPositionAfter === "object" && "value" in LocalPositionAfter ? LocalPositionAfter?.value : LocalPositionAfter} /* default: [0; 0; 0] */  isRaw={typeof LocalPositionAfter === "object" && "isRaw" in LocalPositionAfter && LocalPositionAfter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="LocalRotationAfter" id={typeof LocalRotationAfter === "object" && "id" in LocalRotationAfter ? LocalRotationAfter?.id : undefined} value={typeof LocalRotationAfter === "object" && "value" in LocalRotationAfter ? LocalRotationAfter?.value : LocalRotationAfter} /* default: [0; 0; 0; 1] */  isRaw={typeof LocalRotationAfter === "object" && "isRaw" in LocalRotationAfter && LocalRotationAfter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalScaleAfter" id={typeof LocalScaleAfter === "object" && "id" in LocalScaleAfter ? LocalScaleAfter?.id : undefined} value={typeof LocalScaleAfter === "object" && "value" in LocalScaleAfter ? LocalScaleAfter?.value : LocalScaleAfter} /* default: [0; 0; 0] */  isRaw={typeof LocalScaleAfter === "object" && "isRaw" in LocalScaleAfter && LocalScaleAfter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="GlobalPositionAfter" id={typeof GlobalPositionAfter === "object" && "id" in GlobalPositionAfter ? GlobalPositionAfter?.id : undefined} value={typeof GlobalPositionAfter === "object" && "value" in GlobalPositionAfter ? GlobalPositionAfter?.value : GlobalPositionAfter} /* default: [0; 0; 0] */  isRaw={typeof GlobalPositionAfter === "object" && "isRaw" in GlobalPositionAfter && GlobalPositionAfter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="GlobalRotationAfter" id={typeof GlobalRotationAfter === "object" && "id" in GlobalRotationAfter ? GlobalRotationAfter?.id : undefined} value={typeof GlobalRotationAfter === "object" && "value" in GlobalRotationAfter ? GlobalRotationAfter?.value : GlobalRotationAfter} /* default: [0; 0; 0; 1] */  isRaw={typeof GlobalRotationAfter === "object" && "isRaw" in GlobalRotationAfter && GlobalRotationAfter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="GlobalScaleAfter" id={typeof GlobalScaleAfter === "object" && "id" in GlobalScaleAfter ? GlobalScaleAfter?.id : undefined} value={typeof GlobalScaleAfter === "object" && "value" in GlobalScaleAfter ? GlobalScaleAfter?.value : GlobalScaleAfter} /* default: [0; 0; 0] */  isRaw={typeof GlobalScaleAfter === "object" && "isRaw" in GlobalScaleAfter && GlobalScaleAfter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_performed" id={typeof _performed === "object" && "id" in _performed ? _performed?.id : undefined} value={typeof _performed === "object" && "value" in _performed ? _performed?.value : _performed} /* default: false */  isRaw={typeof _performed === "object" && "isRaw" in _performed && _performed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_description" id={typeof _description === "object" && "id" in _description ? _description?.id : undefined} value={typeof _description === "object" && "value" in _description ? _description?.value : _description} /* default: <i>null</i> */  isRaw={typeof _description === "object" && "isRaw" in _description && _description.isRaw ? true : undefined} />
        </Component>
      );
    };
    