"use client"

import { useState } from "react"
import {
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Pagination,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@heroui/react"
import {
  Search,
  Plus,
  Filter,
  ChevronDown,
  FileText,
  File,
  Edit,
  Trash,
  Calendar,
  CheckSquare,
  MoreHorizontal,
  Users,
  User,
  Folder,
} from "./ui/icons"
import { FiMessageCircle as MessageCircle, FiUserPlus as UserPlus, FiBriefcase as Briefcase, FiBookOpen as BookOpen, FiLink as Link } from "react-icons/fi"

const DocumentManagementApp = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set<string>([]))
  const [isEmpresaExpanded, setIsEmpresaExpanded] = useState(true)
  const [isEquipesExpanded, setIsEquipesExpanded] = useState(true)
  const [isEquipePenalExpanded, setIsEquipePenalExpanded] = useState(true)

  // Sample document data
  const documents = [
    {
      id: 1,
      type: "file",
      document: "Banco Do Brasil Sa x Larissa Ferreira Brancaci...",
      case: "Relemix Eletronica L...",
      client: "Lucas Lima",
      responsible: "HL",
      lastEdit: "29/07/2025",
      icon: <img src="/file.svg" alt="File" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />,
    },
    {
      id: 2,
      type: "link",
      document: "Banco Do Brasil Sa x Larissa Ferreira Brancaci...",
      case: "Relemix Eletronica L...",
      client: "Lucas Lima",
      responsible: "HL",
      lastEdit: "29/07/2025",
      icon: <Link className="w-6 h-6 text-gray-600" />,
    },
    {
      id: 3,
      type: "file",
      document: "Banco Do Brasil Sa x Larissa Ferreira Brancaci...",
      case: "Relemix Eletronica L...",
      client: "Lucas Lima",
      responsible: "HL",
      lastEdit: "29/07/2025",
      icon: <img src="/FileText.svg" alt="FileText" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />,
    },
    {
      id: 4,
      type: "google-drive",
      document: "Banco Do Brasil Sa x Larissa Ferreira Brancaci...",
      case: "Relemix Eletronica L...",
      client: "Lucas Lima",
      responsible: "HL",
      lastEdit: "29/07/2025",
      icon: <img src="/Google Drive icon.svg" alt="Google Drive" className="w-6 h-6" />,
    },
    {
      id: 5,
      type: "word",
      document: "Banco Do Brasil Sa x Larissa Ferreira Brancaci...",
      case: "Relemix Eletronica L...",
      client: "Lucas Lima",
      responsible: "HL",
      lastEdit: "29/07/2025",
      icon: <img src="/doc.svg" alt="Doc" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(7462%) hue-rotate(214deg) brightness(97%) contrast(87%)'}} />,
    },
    {
      id: 6,
      type: "file",
      document: "Banco Do Brasil Sa x Larissa Ferreira Brancaci...",
      case: "Relemix Eletronica L...",
      client: "Lucas Lima",
      responsible: "HL",
      lastEdit: "29/07/2025",
      icon: <img src="/file.svg" alt="File" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />,
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="bg-white flex flex-col" style={{ width: '300px' }}>
        {/* User Profile */}
        <div className="p-4 pb-2">
          <div className="flex items-center space-x-2">
            {/* Separate Profile Picture */}
            <div className="flex-shrink-0">
              <img src="/profile.png" alt="Profile" className="w-7 h-7 rounded-sm object-cover" />
            </div>
            
            {/* Account Bar */}
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  className="flex-1 justify-start p-0 h-auto"
                  endContent={<img src="/CaretDown.svg" alt="Dropdown" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />}
                >
                  <span className="text-base font-medium">Yo-lara</span>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User menu">
                <DropdownItem key="perfil">Perfil</DropdownItem>
                <DropdownItem key="configuracoes">Configurações</DropdownItem>
                <DropdownItem key="sair">Sair</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            
            {/* Search Button */}
            <Button
              isIconOnly
              variant="light"
              className="w-8 h-8 min-w-8"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            
            {/* Add Button */}
            <Button
              isIconOnly
              variant="light"
              className="w-10 h-10 min-w-10 rounded"
              style={{ backgroundColor: 'rgba(228, 228, 231, 1)' }}
            >
              <img src="/plus.svg" alt="Add" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 pt-2 pb-4 space-y-2">
          {/* Seus compromissos */}
          <div className="flex items-center justify-between p-2 text-base text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
            <div className="flex items-center">
              <img src="/25.svg" alt="Compromissos" className="w-6 h-6 mr-3" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
              Seus compromissos
            </div>
            <Chip size="sm" color="danger" variant="solid" className="text-sm">
              0
            </Chip>
          </div>

          {/* Suas tarefas */}
          <div className="flex items-center p-2 text-base text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
            <img src="/checklist.svg" alt="Tarefas" className="w-6 h-6 mr-3" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
            Suas tarefas
          </div>

          {/* Sua empresa */}
          <div className="mt-6">
            <div 
              className="flex items-center p-2 text-base text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => setIsEmpresaExpanded(!isEmpresaExpanded)}
            >
              <div className="flex items-center">
                Sua empresa
                <img src="/CaretDown.svg" alt="Dropdown" className={`w-5 h-5 ml-2 transition-transform duration-200 ${isEmpresaExpanded ? '' : 'rotate-[-90deg]'}`} style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
              </div>
            </div>

            {/* Sua empresa submenu */}
            <div className={`ml-4 mt-2 flex flex-col items-start gap-3.5 self-stretch overflow-hidden transition-all duration-300 ${
              isEmpresaExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                <img src="/wa.svg" alt="Conversas" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                <span>Conversas</span>
                <div className="flex p-0.5 items-center gap-2.5 rounded ml-1" style={{backgroundColor: 'rgba(209, 244, 224, 1)'}}>
                  <img src="/21.svg" alt="Conversas Icon" className="w-4 h-4" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(120deg) brightness(97%) contrast(87%)'}} />
                </div>
              </div>
              <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                <img src="/19.svg" alt="Compromissos" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                Compromissos
                <Chip size="sm" color="danger" variant="solid" className="ml-auto text-sm">
                  3
                </Chip>
              </div>
              <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                <img src="/11.svg" alt="Tarefas" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                Tarefas
              </div>
              <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                <img src="/7.svg" alt="Processos e casos" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                Processos e casos
              </div>
              <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                <img src="/15.svg" alt="Publicações" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                Publicações
                <Chip size="sm" color="danger" variant="solid" className="ml-auto text-sm">
                  2
                </Chip>
              </div>
              <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                <MoreHorizontal className="w-6 h-6 mr-2 text-gray-500" />
                Ver mais
              </div>
            </div>
          </div>

          {/* Suas equipes */}
          <div className="mt-4">
            <div 
              className="flex items-center p-2 text-base text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => setIsEquipesExpanded(!isEquipesExpanded)}
            >
              <div className="flex items-center">
                Suas equipes
                <img src="/CaretDown.svg" alt="Dropdown" className={`w-5 h-5 ml-2 transition-transform duration-200 ${isEquipesExpanded ? '' : 'rotate-[-90deg]'}`} style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
              </div>
            </div>

            {/* Suas equipes submenu */}
            <div className={`ml-4 mt-2 flex flex-col items-start gap-3.5 self-stretch overflow-hidden transition-all duration-300 ${
              isEquipesExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {/* Equipe Penal */}
              <div className="w-full">
                <div 
                  className="flex h-8 px-1.5 py-1.5 items-center gap-1.5 self-stretch text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer"
                  onClick={() => setIsEquipePenalExpanded(!isEquipePenalExpanded)}
                >
                  <div className="flex p-0.5 items-center gap-2.5 bg-blue-500 bg-opacity-20 rounded">
                    <img src="/Icon-12.svg" alt="Equipe Penal" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(214%) brightness(97%) contrast(87%)'}} />
                  </div>
                  Equipe Penal
                  <img src="/CaretDown.svg" alt="Dropdown" className={`w-5 h-5 ml-2 transition-transform duration-200 ${isEquipePenalExpanded ? '' : 'rotate-[-90deg]'}`} style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                </div>

                {/* Equipe Penal submenu */}
                <div className={`ml-4 mt-1 flex flex-col items-start gap-3.5 self-stretch overflow-hidden transition-all duration-300 ${
                  isEquipePenalExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                    <img src="/11.svg" alt="Tarefas" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                    Tarefas
                  </div>
                  <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                    <img src="/7.svg" alt="Processos e casos" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                    Processos e casos
                  </div>
                  <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                    <img src="/15.svg" alt="Publicações" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                    Publicações
                  </div>
                  <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer bg-gray-100 self-stretch">
                    <img src="/10.svg" alt="Documentos" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                    Documentos
                  </div>
                  <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                    <img src="/8.svg" alt="Colaboradores" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                    Colaboradores
                  </div>
                  <div className="flex items-center h-8 px-2 py-1 text-base text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer self-stretch">
                    <img src="/contact.svg" alt="Clientes/Partes" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(47%) sepia(6%) saturate(516%) hue-rotate(202deg) brightness(95%) contrast(85%)'}} />
                    Clientes/Partes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Criar equipe button */}
          <div className="mt-4">
            <div className="flex items-center p-2 text-base text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
              <img 
                src="/Plus-1.svg" 
                alt="Criar equipe" 
                className="flex justify-end items-start gap-2.5" 
                style={{
                  display: 'flex',
                  width: '22px',
                  height: '22px',
                  minWidth: '22px',
                  maxWidth: '22px',
                  minHeight: '22px',
                  maxHeight: '22px',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginRight: '8px'
                }}
              />
              Criar equipe
            </div>
          </div>
        </div>
      </div>
 
      {/* Main Content */}
      <div 
        className="flex-1 flex flex-col relative"
        style={{
          display: 'flex',
          padding: 'var(--Unit-4, 16px)',
          paddingBottom: '16px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
          borderRadius: '8px',
          border: '1px solid #E4E4E7',
          background: '#F4F4F5',
          margin: '8px',
          minHeight: 'fit-content',
          height: 'auto'
        }}
      >
        {/* Adicionar Button - Top Far Right */}
        <div className="absolute top-4 right-6 z-10">
          <Button color="primary" startContent={<img src="/plus.svg" alt="Plus" className="w-5 h-5" />} className="bg-blue-500 px-6 h-12 text-base">
            Adicionar
          </Button>
        </div>

        {/* Top Tabs */}
        <div className="">
          <div className="px-6 flex gap-6 h-12 items-center">
            <Button
              variant="light"
              className="px-0 h-12 bg-transparent hover:bg-gray-50 text-base"
            >
              <div className="flex items-center space-x-2">
                <div className="flex p-0.5 items-center gap-2.5 bg-blue-500 bg-opacity-20 rounded">
                  <img src="/Icon-12.svg" alt="Equipe Penal" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(214%) brightness(97%) contrast(87%)'}} />
                </div>
                <span className="text-base">Equipe penal</span>
              </div>
            </Button>
            <Button
              variant="light"
              className="px-0 h-12 bg-white text-blue-500 hover:bg-gray-50 text-base"
            >
              <div className="flex items-center space-x-2">
                <img src="/10.svg" alt="Documentos" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
                <span className="text-base">Documentos</span>
              </div>
            </Button>
            <Button
              variant="light"
              className="px-0 h-12 bg-transparent hover:bg-gray-50 text-base"
            >
              <div className="flex items-center space-x-2">
                <img src="/wa.svg" alt="Whatsapp" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(100deg) brightness(97%) contrast(87%)'}} />
                <span className="text-base">Whatsapp documentos</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full">
          {/* Search and Actions */}
          <div className="flex items-center justify-between mb-6 w-full p-6 pb-6 border-t border-b border-gray-200">
            <div className="flex-1">
              <Input
                placeholder="Digite algo para pesquisar"
                startContent={<Search className="w-5 h-8 text-gray-400" />}
                classNames={{
                  input: "text-base",
                  inputWrapper: "bg-transparent border-gray-200 h-15",
                }}
              />
            </div>
            <div className="flex items-center space-x-3 ml-4">
              <Button variant="light" startContent={<img src="/9.svg" alt="Filtrar" className="w-6 h-6" style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />} className="text-gray-600 h-12 px-6 text-base">
                Filtrar
              </Button>
            </div>
          </div>

          <div className="px-6">
          {/* Documents Table */}
          <Card 
            className={`${documents.length >= 6 ? 'min-h-[660px]' : 'min-h-fit'} w-full max-w-none`}
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: 'none',
              padding: '16px',
              flexDirection: 'column',
              alignItems: 'stretch',
              alignSelf: 'stretch',
              gap: '16px',
              background: '#FFFFFF',
              flex: '1 1 auto'
            }}
          >
            <style jsx global>{`
              .document-table tr:not(:last-child) {
                border-bottom: 1px solid var(--Global-Border-Quaternary, #E4E4E7) !important;
              }
              .document-table input[type="checkbox"] {
                transform: scale(2) !important;
                accent-color: rgba(161, 161, 170, 1) !important;
                width: 24px !important;
                height: 24px !important;
                min-width: 24px !important;
                min-height: 24px !important;
              }
              .document-table .nextui-checkbox,
              .document-table .heroui-checkbox,
              .document-table [data-slot="base"],
              .document-table [data-slot="wrapper"],
              .document-table [data-testid="checkbox"] {
                transform: scale(2) !important;
                width: 24px !important;
                height: 24px !important;
              }
              .document-table .nextui-checkbox-wrapper,
              .document-table .heroui-checkbox-wrapper {
                transform: scale(2) !important;
              }
              .document-table tbody tr td:first-child,
              .document-table thead tr th:first-child {
                padding-left: 32px !important;
                width: 80px !important;
                vertical-align: middle !important;
              }
              .document-table [role="checkbox"] {
                transform: scale(2) !important;
                width: 24px !important;
                height: 24px !important;
              }
              /* Remove visual effects when checked, keep only check animation */
              .document-table tbody tr[data-selected="true"] {
                background-color: transparent !important;
                color: inherit !important;
              }
              .document-table tbody tr[data-selected="true"] td {
                background-color: white !important;
                color: inherit !important;
              }
              .document-table tbody tr[data-hover="true"] {
                background-color: transparent !important;
              }
              .document-table tbody tr[data-hover="true"][data-selected="true"] {
                background-color: transparent !important;
              }
              .document-table [data-slot="base"][data-selected="true"] {
                background-color: rgba(161, 161, 170, 1) !important;
                border-color: rgba(161, 161, 170, 1) !important;
              }
            `}</style>
            <CardBody className="p-0 w-full">
              <Table
                className="document-table"
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                classNames={{
                  wrapper: `shadow-none w-full bg-white ${documents.length >= 6 ? 'min-h-[605px]' : 'min-h-fit'}`,
                  th: "bg-white text-gray-600 font-bold text-sm uppercase tracking-wide align-middle",
                  td: `${documents.length >= 6 ? 'py-8' : 'py-4'} text-lg bg-white`,
                  table: `w-full bg-white ${documents.length >= 6 ? 'h-full' : ''}`,
                  tbody: `bg-white ${documents.length >= 6 ? 'h-full' : ''}`,
                  tr: `bg-white ${documents.length >= 6 ? 'h-full' : ''}`,
                }}
                style={{
                  '--table-border': '#E4E4E7'
                } as React.CSSProperties}
                checkboxesProps={{
                  classNames: {
                    wrapper: "scale-100 w-6 h-6",
                    base: "scale-100 w-6 h-6",
                  }
                }}
              >
                <TableHeader>
                  <TableColumn>TIPO</TableColumn>
                  <TableColumn>DOCUMENTO</TableColumn>
                  <TableColumn>CASO/PROCESSO</TableColumn>
                  <TableColumn>CLIENTE</TableColumn>
                  <TableColumn>RESPONSÁVEL</TableColumn>
                  <TableColumn>ÚLTIMA EDIÇÃO</TableColumn>
                  <TableColumn>AÇÕES</TableColumn>
                </TableHeader>
                <TableBody>
                  {documents.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div className="flex items-center text-2xl">{doc.icon}</div>
                      </TableCell>
                      <TableCell>
                        <span className="text-lg">{doc.document}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <img src="/17.svg" alt="Case Icon" className="w-6 h-6 mr-2" style={{filter: 'brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(7462%) hue-rotate(214deg) brightness(97%) contrast(87%)'}} />
                          <span className="text-lg text-gray-600">{doc.case}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div 
                            className="flex text-xs font-medium text-blue-700 mr-2"
                            style={{
                              display: 'flex',
                              width: '20px',
                              height: '20px',
                              padding: '4px',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '10px',
                              borderRadius: '4px',
                              background: '#CCE3FD'
                            }}
                          >
                            HL
                          </div>
                          <span className="text-lg">{doc.client}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div 
                          className="flex text-xs font-medium text-gray-600"
                          style={{
                            display: 'flex',
                            width: '20px',
                            height: '20px',
                            padding: '4px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            flexShrink: '0',
                            borderRadius: '9999999px',
                            border: '1px dashed #E4E4E7',
                            background: '#FFF'
                          }}
                        >
                          HL
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-lg text-gray-600">{doc.lastEdit}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button isIconOnly size="md" variant="light" className="text-gray-400 hover:text-gray-600">
                            <img src="/4.svg" alt="Edit" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(60%) contrast(100%)'}} />
                          </Button>
                          <Button isIconOnly size="md" variant="light" className="text-gray-400 hover:text-gray-600">
                            <img src="/trash.svg" alt="Delete" className="w-5 h-5" style={{filter: 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(60%) contrast(100%)'}} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {/* Pagination inside table */}
              <div className="flex justify-start p-4 bg-white border-t border-[#E4E4E7]">
                <Pagination
                  total={4}
                  initialPage={1}
                  showControls
                  siblings={1}
                  boundaries={1}
                  classNames={{
                    wrapper: "gap-0 overflow-visible h-8 rounded",
                    item: "w-8 h-8 text-small rounded-none bg-transparent",
                    cursor: "bg-[rgba(228,228,231,1)] text-gray-700 font-medium",
                  }}
                />
              </div>
            </CardBody>
          </Card>
          </div>
          
          {/* Bottom spacing - 16px after table */}
          <div style={{ height: '16px' }}></div>
        </div>
      </div>
    </div>
  )
}

export default DocumentManagementApp
