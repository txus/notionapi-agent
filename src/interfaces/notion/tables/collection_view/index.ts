import { UUID, Table } from "../../common"
import { CollectionViewType } from "./common"
import { Query, Query2 } from "./query"
import { Format } from "./format"

/**
 * Describe a view of a collection.
 */
export interface CollectionView {
  id: UUID
  version: number
  /** The type of view. */
  type: CollectionViewType
  /** The name of a view. */
  name: string
  /** Settings for aggregation, filtering, and sorting. */
  query: Query
  query2: Query2
  /**
   * Equivalent to these settings in Notion :
   * 1. Visibility switches in the **Properties** button dropdown.
   * 2. **Wrap Cells** switch in the **···** button dropdown.
   * 3. Table column width.
   */
  format: Format
  parent_id: UUID
  parent_table: Table
  alive: boolean
  page_sort: UUID[]
}