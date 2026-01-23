'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { Image } from '@tiptap/extension-image'
import { Link } from '@tiptap/extension-link'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Highlight } from '@tiptap/extension-highlight'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { cn } from '@/lib/utils/cn'
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  Table as TableIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Highlighter,
  Minus,
  Plus,
  Trash2,
  RowsIcon,
  Columns,
  Palette,
} from 'lucide-react'
import { Button } from './button'
import { useState, useCallback } from 'react'

interface RichTextEditorProps {
  content?: string
  onChange?: (content: string) => void
  placeholder?: string
  className?: string
  editable?: boolean
}

const MenuButton = ({
  onClick,
  isActive = false,
  disabled = false,
  children,
  title,
}: {
  onClick: () => void
  isActive?: boolean
  disabled?: boolean
  children: React.ReactNode
  title?: string
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={cn(
      'p-2 rounded hover:bg-slate-700 transition-colors',
      isActive && 'bg-slate-700 text-emerald-400',
      disabled && 'opacity-50 cursor-not-allowed'
    )}
  >
    {children}
  </button>
)

const MenuDivider = () => <div className="w-px h-6 bg-slate-600 mx-1" />

const TableMenu = ({ editor }: { editor: Editor }) => {
  const [showMenu, setShowMenu] = useState(false)

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
    setShowMenu(false)
  }

  const addColumnBefore = () => editor.chain().focus().addColumnBefore().run()
  const addColumnAfter = () => editor.chain().focus().addColumnAfter().run()
  const deleteColumn = () => editor.chain().focus().deleteColumn().run()
  const addRowBefore = () => editor.chain().focus().addRowBefore().run()
  const addRowAfter = () => editor.chain().focus().addRowAfter().run()
  const deleteRow = () => editor.chain().focus().deleteRow().run()
  const deleteTable = () => editor.chain().focus().deleteTable().run()
  const mergeCells = () => editor.chain().focus().mergeCells().run()
  const splitCell = () => editor.chain().focus().splitCell().run()
  const toggleHeaderRow = () => editor.chain().focus().toggleHeaderRow().run()
  const toggleHeaderColumn = () => editor.chain().focus().toggleHeaderColumn().run()

  return (
    <div className="relative">
      <MenuButton onClick={() => setShowMenu(!showMenu)} title="Table">
        <TableIcon className="w-4 h-4" />
      </MenuButton>
      {showMenu && (
        <div className="absolute top-full left-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 p-2 min-w-[200px]">
          <button
            type="button"
            onClick={insertTable}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Insert Table (3x3)
          </button>
          <div className="border-t border-slate-600 my-2" />
          <div className="text-xs text-slate-400 px-3 py-1">Columns</div>
          <button
            type="button"
            onClick={addColumnBefore}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm flex items-center gap-2"
          >
            <Columns className="w-4 h-4" /> Add Column Before
          </button>
          <button
            type="button"
            onClick={addColumnAfter}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm flex items-center gap-2"
          >
            <Columns className="w-4 h-4" /> Add Column After
          </button>
          <button
            type="button"
            onClick={deleteColumn}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm text-red-400 flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" /> Delete Column
          </button>
          <div className="border-t border-slate-600 my-2" />
          <div className="text-xs text-slate-400 px-3 py-1">Rows</div>
          <button
            type="button"
            onClick={addRowBefore}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm flex items-center gap-2"
          >
            <RowsIcon className="w-4 h-4" /> Add Row Before
          </button>
          <button
            type="button"
            onClick={addRowAfter}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm flex items-center gap-2"
          >
            <RowsIcon className="w-4 h-4" /> Add Row After
          </button>
          <button
            type="button"
            onClick={deleteRow}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm text-red-400 flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" /> Delete Row
          </button>
          <div className="border-t border-slate-600 my-2" />
          <div className="text-xs text-slate-400 px-3 py-1">Cells</div>
          <button
            type="button"
            onClick={mergeCells}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm"
          >
            Merge Cells
          </button>
          <button
            type="button"
            onClick={splitCell}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm"
          >
            Split Cell
          </button>
          <div className="border-t border-slate-600 my-2" />
          <div className="text-xs text-slate-400 px-3 py-1">Headers</div>
          <button
            type="button"
            onClick={toggleHeaderRow}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm"
          >
            Toggle Header Row
          </button>
          <button
            type="button"
            onClick={toggleHeaderColumn}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm"
          >
            Toggle Header Column
          </button>
          <div className="border-t border-slate-600 my-2" />
          <button
            type="button"
            onClick={deleteTable}
            className="w-full text-left px-3 py-2 hover:bg-slate-700 rounded text-sm text-red-400 flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" /> Delete Table
          </button>
        </div>
      )}
    </div>
  )
}

const ColorPicker = ({ editor }: { editor: Editor }) => {
  const [showMenu, setShowMenu] = useState(false)
  const colors = [
    '#000000', '#374151', '#6b7280', '#9ca3af', '#d1d5db', '#ffffff',
    '#dc2626', '#ea580c', '#ca8a04', '#16a34a', '#0891b2', '#2563eb',
    '#7c3aed', '#c026d3', '#e11d48',
  ]

  return (
    <div className="relative">
      <MenuButton onClick={() => setShowMenu(!showMenu)} title="Text Color">
        <Palette className="w-4 h-4" />
      </MenuButton>
      {showMenu && (
        <div className="absolute top-full left-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 p-3">
          <div className="grid grid-cols-5 gap-1">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => {
                  editor.chain().focus().setColor(color).run()
                  setShowMenu(false)
                }}
                className="w-6 h-6 rounded border border-slate-600 hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              editor.chain().focus().unsetColor().run()
              setShowMenu(false)
            }}
            className="w-full mt-2 text-xs text-slate-400 hover:text-white"
          >
            Remove Color
          </button>
        </div>
      )}
    </div>
  )
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const [linkUrl, setLinkUrl] = useState('')
  const [showLinkInput, setShowLinkInput] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [showImageInput, setShowImageInput] = useState(false)

  const setLink = useCallback(() => {
    if (linkUrl) {
      editor?.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run()
    } else {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run()
    }
    setShowLinkInput(false)
    setLinkUrl('')
  }, [editor, linkUrl])

  const addImage = useCallback(() => {
    if (imageUrl) {
      editor?.chain().focus().setImage({ src: imageUrl }).run()
    }
    setShowImageInput(false)
    setImageUrl('')
  }, [editor, imageUrl])

  if (!editor) return null

  return (
    <div className="border-b border-slate-600 bg-slate-800/50 p-2">
      <div className="flex flex-wrap items-center gap-1">
        {/* Undo/Redo */}
        <MenuButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </MenuButton>

        <MenuDivider />

        {/* Text Formatting */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive('underline')}
          title="Underline"
        >
          <UnderlineIcon className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          isActive={editor.isActive('highlight')}
          title="Highlight"
        >
          <Highlighter className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
          title="Inline Code"
        >
          <Code className="w-4 h-4" />
        </MenuButton>

        <ColorPicker editor={editor} />

        <MenuDivider />

        {/* Headings */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 })}
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </MenuButton>

        <MenuDivider />

        {/* Lists */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          title="Ordered List"
        >
          <ListOrdered className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </MenuButton>

        <MenuDivider />

        {/* Alignment */}
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
          title="Align Left"
        >
          <AlignLeft className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          title="Align Center"
        >
          <AlignCenter className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          title="Align Right"
        >
          <AlignRight className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          isActive={editor.isActive({ textAlign: 'justify' })}
          title="Justify"
        >
          <AlignJustify className="w-4 h-4" />
        </MenuButton>

        <MenuDivider />

        {/* Link */}
        <div className="relative">
          <MenuButton
            onClick={() => setShowLinkInput(!showLinkInput)}
            isActive={editor.isActive('link')}
            title="Link"
          >
            <LinkIcon className="w-4 h-4" />
          </MenuButton>
          {showLinkInput && (
            <div className="absolute top-full left-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 p-3 min-w-[250px]">
              <input
                type="url"
                placeholder="Enter URL..."
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onKeyDown={(e) => e.key === 'Enter' && setLink()}
              />
              <div className="flex gap-2 mt-2">
                <Button size="sm" onClick={setLink}>
                  Set Link
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    editor.chain().focus().unsetLink().run()
                    setShowLinkInput(false)
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Image */}
        <div className="relative">
          <MenuButton
            onClick={() => setShowImageInput(!showImageInput)}
            title="Image"
          >
            <ImageIcon className="w-4 h-4" />
          </MenuButton>
          {showImageInput && (
            <div className="absolute top-full left-0 mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 p-3 min-w-[250px]">
              <input
                type="url"
                placeholder="Enter image URL..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onKeyDown={(e) => e.key === 'Enter' && addImage()}
              />
              <Button size="sm" className="mt-2" onClick={addImage}>
                Add Image
              </Button>
            </div>
          )}
        </div>

        {/* Table */}
        <TableMenu editor={editor} />

        <MenuDivider />

        {/* Horizontal Rule */}
        <MenuButton
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Horizontal Rule"
        >
          <Minus className="w-4 h-4" />
        </MenuButton>
      </div>
    </div>
  )
}

export function RichTextEditor({
  content = '',
  onChange,
  placeholder = 'Start writing...',
  className,
  editable = true,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'border-collapse border border-slate-600',
        },
      }),
      TableRow,
      TableCell.configure({
        HTMLAttributes: {
          class: 'border border-slate-600 p-2 min-w-[100px]',
        },
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class: 'border border-slate-600 p-2 bg-slate-700 font-semibold',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-emerald-400 hover:text-emerald-300 underline',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      Placeholder.configure({
        placeholder,
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: 'bg-yellow-500/30 rounded px-1',
        },
      }),
      TextStyle,
      Color,
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: cn(
          'prose prose-invert max-w-none focus:outline-none min-h-[300px] p-4',
          'prose-headings:text-white prose-p:text-slate-100',
          'prose-strong:text-white prose-em:text-slate-100',
          'prose-ul:text-slate-100 prose-ol:text-slate-100',
          'prose-li:text-slate-100',
          'prose-blockquote:border-l-emerald-500 prose-blockquote:text-slate-300',
          'prose-code:text-emerald-400 prose-code:bg-slate-700 prose-code:px-1 prose-code:rounded',
          'prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300',
          '[&_.ProseMirror-placeholder]:text-slate-400',
          '[&_*]:text-slate-100'
        ),
      },
    },
    immediatelyRender: false,
  })

  return (
    <div
      className={cn(
        'border border-slate-600 rounded-lg overflow-hidden bg-slate-800',
        className
      )}
    >
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}

export { RichTextEditor as default }
