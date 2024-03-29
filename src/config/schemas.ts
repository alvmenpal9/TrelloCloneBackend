import { AttachmentSchema } from "src/schemas/attachments.schema";
import { BoardSchema } from "src/schemas/board.schema";
import { CardSchema } from "src/schemas/card.schema";
import { ListSchema } from "src/schemas/list.schema";
import { UserSchema } from "src/schemas/user.schema";
import { WorkspaceSchema } from "src/schemas/workspace.schema";

export const AppSchemas = [
    {
        name: 'User',
        schema: UserSchema
    },{
        name: 'Workspace',
        schema: WorkspaceSchema
    },{
        name: 'Board',
        schema: BoardSchema
    },{
        name: 'List',
        schema: ListSchema
    },{
        name: 'Card',
        schema: CardSchema
    },{
        name: 'Attachment',
        schema: AttachmentSchema
    }
]