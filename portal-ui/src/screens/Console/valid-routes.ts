//  This file is part of MinIO Console Server
//  Copyright (c) 2022 MinIO, Inc.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU Affero General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU Affero General Public License for more details.
//
//  You should have received a copy of the GNU Affero General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { IMenuItem } from "./Menu/types";
import { NavLink } from "react-router-dom";
import {
  CONSOLE_UI_RESOURCE,
  IAM_PAGES,
  IAM_PAGES_PERMISSIONS,
  IAM_SCOPES,
  S3_ALL_RESOURCES,
} from "../../common/SecureComponent/permissions";
import {
  AccessMenuIcon,
  AccountsMenuIcon,
  AuditLogsMenuIcon,
  BucketsMenuIcon,
  DrivesMenuIcon,
  GroupsMenuIcon,
  HealthMenuIcon,
  IdentityMenuIcon,
  InspectMenuIcon,
  LogsMenuIcon,
  MetricsMenuIcon,
  MonitoringMenuIcon,
  PerformanceMenuIcon,
  ProfileMenuIcon,
  SupportMenuIcon,
  TraceMenuIcon,
  UsersMenuIcon,
} from "../../icons/SidebarMenus";
import { hasPermission } from "../../common/SecureComponent";
import WatchIcon from "../../icons/WatchIcon";
import RegisterMenuIcon from "../../icons/SidebarMenus/RegisterMenuIcon";
import {
  DocumentationIcon,
  LambdaIcon,
  LicenseIcon,
  RecoverIcon,
  TenantsOutlineIcon,
  TiersIcon,
} from "../../icons";
import SettingsIcon from "../../icons/SettingsIcon";
import React from "react";
import LicenseBadge from "./Menu/LicenseBadge";

export const validRoutes = (
  features: string[] | null | undefined,
  operatorMode: boolean
) => {
  const ldapIsEnabled = (features && features.includes("ldap-idp")) || false;
  let consoleMenus: IMenuItem[] = [
    {
      name: "区块",
      id: "buckets",
      component: NavLink,
      to: IAM_PAGES.BUCKETS,
      icon: BucketsMenuIcon,
      forceDisplay: true,
      children: [],
    },
    {
      name: "身份",
      id: "identity",
      icon: IdentityMenuIcon,
      children: [
        {
          component: NavLink,
          id: "users",
          to: IAM_PAGES.USERS,
          customPermissionFnc: () =>
            hasPermission(CONSOLE_UI_RESOURCE, [IAM_SCOPES.ADMIN_LIST_USERS]) ||
            hasPermission(S3_ALL_RESOURCES, [IAM_SCOPES.ADMIN_CREATE_USER]),
          name: "用户",
          icon: UsersMenuIcon,
          fsHidden: ldapIsEnabled,
        },
        {
          component: NavLink,
          id: "groups",
          to: IAM_PAGES.GROUPS,
          name: "组织",
          icon: GroupsMenuIcon,
          fsHidden: ldapIsEnabled,
        },
        {
          component: NavLink,
          id: "serviceaccounts",
          to: IAM_PAGES.ACCOUNT,
          name: "系统账户",
          icon: AccountsMenuIcon,
          forceDisplay: true,
        },
      ],
    },
    {
      name: "权限",
      component: NavLink,
      id: "access",
      to: IAM_PAGES.POLICIES,
      icon: AccessMenuIcon,
    },

    {
      name: "监控",
      id: "tools",
      icon: MonitoringMenuIcon,
      children: [
        {
          name: "指标",
          id: "monitorMetrics",
          to: IAM_PAGES.DASHBOARD,
          icon: MetricsMenuIcon,
          component: NavLink,
        },
        {
          name: "日志",
          id: "monitorLogs",
          to: IAM_PAGES.TOOLS_LOGS,
          icon: LogsMenuIcon,
          component: NavLink,
        },
        {
          name: "鉴权",
          id: "monitorAudit",
          to: IAM_PAGES.TOOLS_AUDITLOGS,
          icon: AuditLogsMenuIcon,
          component: NavLink,
        },
        {
          name: "追溯",
          id: "monitorTrace",
          to: IAM_PAGES.TOOLS_TRACE,
          icon: TraceMenuIcon,
          component: NavLink,
        },
        {
          name: "检查",
          id: "watch",
          component: NavLink,
          icon: WatchIcon,
          to: IAM_PAGES.TOOLS_WATCH,
        },
        {
          name: "驱动",
          id: "monitorDrives",
          to: IAM_PAGES.TOOLS_HEAL,
          icon: DrivesMenuIcon,
          component: NavLink,
        },
      ],
    },
    {
      component: NavLink,
      to: IAM_PAGES.NOTIFICATIONS_ENDPOINTS,
      name: "通知",
      icon: LambdaIcon,
      id: "lambda",
    },
    // {
    //   component: NavLink,
    //   to: IAM_PAGES.TIERS,
    //   name: "Tiers",
    //   icon: TiersIcon,
    //   id: "tiers",
    // },
    // {
    //   component: NavLink,
    //   to: IAM_PAGES.SITE_REPLICATION,
    //   name: "站点复制",
    //   icon: RecoverIcon,
    //   id: "sitereplication",
    // },
    // {
    //   component: NavLink,
    //   to: IAM_PAGES.SETTINGS,
    //   name: "配置",
    //   id: "configurations",
    //   icon: SettingsIcon,
    // },
    {
      name: "支持",
      id: "support",
      icon: SupportMenuIcon,
      children: [
        {
          name: "注册",
          id: "register",
          component: NavLink,
          icon: RegisterMenuIcon,
          to: IAM_PAGES.REGISTER_SUPPORT,
        },
        {
          name: "健康",
          id: "diagnostics",
          component: NavLink,
          icon: HealthMenuIcon,
          to: IAM_PAGES.TOOLS_DIAGNOSTICS,
        },
        {
          name: "性能",
          id: "performance",
          component: NavLink,
          icon: PerformanceMenuIcon,
          to: IAM_PAGES.TOOLS_SPEEDTEST,
        },
        {
          name: "Profile",
          id: "profile",
          component: NavLink,
          icon: ProfileMenuIcon,
          to: IAM_PAGES.PROFILE,
        },

        // {
        //   name: "Call Home",
        //   id: "callhome",
        //   component: NavLink,
        //   icon: CallHomeMenuIcon,
        //   to: IAM_PAGES.CALL_HOME,
        // },
        {
          name: "检查",
          id: "inspectObjects",
          to: IAM_PAGES.SUPPORT_INSPECT,
          icon: InspectMenuIcon,
          component: NavLink,
        },
      ],
    },
    // {
    //   component: NavLink,
    //   to: IAM_PAGES.LICENSE,
    //   name: "License",
    //   id: "license",
    //   icon: LicenseIcon,
    //   badge: LicenseBadge,
    //   forceDisplay: true,
    // },
    // {
    //   type: "item",
    //   component: NavLink,
    //   to: IAM_PAGES.DOCUMENTATION,
    //   name: "Documentation",
    //   icon: DocumentationIcon,
    //   forceDisplay: true,
    //   onClick: (
    //     e:
    //       | React.MouseEvent<HTMLLIElement>
    //       | React.MouseEvent<HTMLAnchorElement>
    //       | React.MouseEvent<HTMLDivElement>
    //   ) => {
    //     e.preventDefault();
    //     window.open("https://docs.min.io/?ref=con", "_blank");
    //   },
    // },
  ];

  let operatorMenus: IMenuItem[] = [
    {
      group: "Operator",
      type: "item",
      id: "Tenants",
      component: NavLink,
      to: IAM_PAGES.TENANTS,
      name: "Tenants",
      icon: TenantsOutlineIcon,
      forceDisplay: true,
    },
    {
      group: "Operator",
      type: "item",
      id: "License",
      component: NavLink,
      to: IAM_PAGES.LICENSE,
      name: "License",
      icon: LicenseIcon,
      forceDisplay: true,
    },
    {
      group: "Operator",
      type: "item",
      id: "Documentation",
      component: NavLink,
      to: IAM_PAGES.DOCUMENTATION,
      name: "Documentation",
      icon: DocumentationIcon,
      forceDisplay: true,
      onClick: (
        e:
          | React.MouseEvent<HTMLLIElement>
          | React.MouseEvent<HTMLAnchorElement>
          | React.MouseEvent<HTMLDivElement>
      ) => {
        e.preventDefault();
        window.open("https://docs.min.io/?ref=op", "_blank");
      },
    },
  ];

  const allowedItems = (operatorMode ? operatorMenus : consoleMenus).filter(
    (item: IMenuItem) => {
      if (item.children && item.children.length > 0) {
        const c = item.children?.filter((childItem: IMenuItem) => {
          return (
            ((childItem.customPermissionFnc
              ? childItem.customPermissionFnc()
              : hasPermission(
                  CONSOLE_UI_RESOURCE,
                  IAM_PAGES_PERMISSIONS[childItem.to ?? ""]
                )) ||
              childItem.forceDisplay) &&
            !childItem.fsHidden
          );
        });
        return c.length > 0;
      }

      const res =
        ((item.customPermissionFnc
          ? item.customPermissionFnc()
          : hasPermission(
              CONSOLE_UI_RESOURCE,
              IAM_PAGES_PERMISSIONS[item.to ?? ""]
            )) ||
          item.forceDisplay) &&
        !item.fsHidden;
      return res;
    }
  );
  return allowedItems;
};
